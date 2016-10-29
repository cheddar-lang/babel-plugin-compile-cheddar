# babel-plugin-compile-cheddar

Compiles the given string in a `__COMPILE` function to a cheddar CST.

## Installation

```sh
$ npm install babel-plugin-compile-cheddar
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-compile-cheddar"]
}
```

### Via CLI

```sh
$ babel --plugins compile-cheddar script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['compile-cheddar']
});
```

## Example
See fixtures within tests

