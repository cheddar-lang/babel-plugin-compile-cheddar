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

                if (name === "__COMPILE") {
                    t.assertStringLiteral(args[0]);

                    let run = new ches(args[0].value, 0);
                    let res = run.exec();

                    if (!(res instanceof ches.Lexer)) {
                        throw new SyntaxError(res);
                    }

                    p.replaceWith(
                        valueToNode(res)
                    );
                }
            }
        }
    };
}

