import fs from 'fs';
import path from 'path';

import valueToNode from './valueToNode.js';

const ches = require('cheddar-parser')(true);

export default function ({
    types: t
}) {
    return {
        visitor: {
            CallExpression(p, state) {
                let name = p.node.callee.name;
                let args = p.node.arguments;

                if (name === "__COMPILE" || name === "__COMPILE_SRC") {
                    t.assertStringLiteral(args[0]);

                    let val = args[0].value;

                    if (name === "__COMPILE_SRC") {
                        // Convert to a string
                        let root = path.dirname(this.file.parserOpts.filename ||  this.file.parserOpts.sourceFileName);
                        let filePath = path.join(root, val);
                        val = fs.readFileSync(filePath, { encoding: 'utf8' }).replace(/\r\n/g, "\n").replace(/\r?\n$/, "");
                    }

                    let funcName = /^# ([A-Za-z0-9]+)/.exec(val) || [ "", null ];

                    let run = new ches(val.slice(funcName[0].length), 0);
                    let res = run.exec();

                    if (!(res instanceof ches.Lexer)) {
                        throw new SyntaxError(res);
                    }

                    res.PreCompiledNodeName = funcName[1];

                    p.replaceWith(
                        valueToNode(res)
                    );
                }
            }
        }
    };
}

