// Modified from: https://github.com/babel/babel/blob/de975b9660014a4533c90190b297352495636530/packages/babel-types/src/converters.js#L258
import isNumber from "lodash/isNumber";
import isRegExp from "lodash/isRegExp";
import isString from "lodash/isString";

import * as t from 'babel-types';

export default function valueToNode(value) {
  // undefined
  if (value === undefined) {
    return t.identifier("undefined");
  }

  // boolean
  if (value === true || value === false) {
    return t.booleanLiteral(value);
  }

  // null
  if (value === null) {
    return t.nullLiteral();
  }

  // strings
  if (isString(value)) {
    return t.stringLiteral(value);
  }

  // numbers
  if (isNumber(value)) {
    return t.numericLiteral(value);
  }

  // regexes
  if (isRegExp(value)) {
    let pattern = value.source;
    let flags = value.toString().match(/\/([a-z]+|)$/)[1];
    return t.regExpLiteral(pattern, flags);
  }

  // array
  if (Array.isArray(value)) {
    return t.arrayExpression(value.map(valueToNode));
  }

  // object
  let props = [];
  for (let key in value) {
    if (value.hasOwnProperty(key) && key !== "Code") {
        let nodeKey = t.stringLiteral(key);
        props.push(t.objectProperty(nodeKey, valueToNode(value[key])));
    }
  }

  // Push constructor data
  props.push(t.objectProperty(
    t.stringLiteral("constructor"),
    t.objectExpression([
      t.objectProperty(
        t.stringLiteral("name"),
        t.stringLiteral(value.constructor.name)
      )
    ])
  ));

  return t.objectExpression(props);
}
