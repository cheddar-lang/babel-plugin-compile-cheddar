"use strict";

({
  isExpression: false,
  Code: "1 + 1",
  Index: 6,
  _Tokens: [{
    isExpression: false,
    Code: "1 + 1",
    Index: 5,
    _Tokens: [{
      isExpression: true,
      Code: "1 + 1",
      Index: 5,
      _Tokens: [{
        isExpression: true,
        Code: "1 + 1",
        Index: 1,
        _Tokens: [{
          isExpression: false,
          Code: "1 + 1",
          Index: 1,
          _Tokens: [{
            isExpression: false,
            Code: "1 + 1",
            Index: 1,
            _Tokens: [{
              isExpression: false,
              Code: "1 + 1",
              Index: 1,
              _Tokens: [10, 0, "1"],
              "constructor": {
                "name": "CheddarNumberToken"
              }
            }],
            "constructor": {
              "name": "CheddarAnyLiteral"
            }
          }],
          Type: {
            "constructor": {
              "name": "Symbol"
            }
          },
          "constructor": {
            "name": "CheddarPropertyToken"
          }
        }],
        "constructor": {
          "name": "CheddarExpressionTokenAlpha"
        }
      }, {
        isExpression: true,
        Code: "1 + 1",
        Index: 5,
        _Tokens: [{
          isExpression: false,
          Code: "1 + 1",
          Index: 3,
          _Tokens: ["+"],
          "constructor": {
            "name": "CheddarOperatorToken"
          }
        }, {
          isExpression: true,
          Code: "1 + 1",
          Index: 5,
          _Tokens: [{
            isExpression: true,
            Code: "1 + 1",
            Index: 5,
            _Tokens: [{
              isExpression: false,
              Code: "1 + 1",
              Index: 5,
              _Tokens: [{
                isExpression: false,
                Code: "1 + 1",
                Index: 5,
                _Tokens: [{
                  isExpression: false,
                  Code: "1 + 1",
                  Index: 5,
                  _Tokens: [10, 0, "1"],
                  "constructor": {
                    "name": "CheddarNumberToken"
                  }
                }],
                "constructor": {
                  "name": "CheddarAnyLiteral"
                }
              }],
              Type: {
                "constructor": {
                  "name": "Symbol"
                }
              },
              "constructor": {
                "name": "CheddarPropertyToken"
              }
            }],
            "constructor": {
              "name": "CheddarExpressionTokenAlpha"
            }
          }],
          "constructor": {
            "name": "CheddarExpressionToken"
          }
        }],
        "constructor": {
          "name": "CheddarExpressionTokenBeta"
        }
      }],
      "constructor": {
        "name": "CheddarExpressionToken"
      }
    }],
    "constructor": {
      "name": "StatementExpression"
    }
  }],
  "constructor": {
    "name": "CheddarTokenize"
  }
});
