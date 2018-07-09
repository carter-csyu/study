# The Modern Javascript 

### Reference
- [javascript.info](http://javascript.info/)
- [github-javascript-tutorial](https://github.com/iliakan/javascript-tutorial-en)
                     
----

현재 학습중인 자바스크립트의 중요 내용들을 정히라는 공간이며,
위 `javascript.info` 사이트를 통하여 정리된 내용의 상세 내용을 확인하실 수 있습니다.

** Table of Contents **
- Javascript Fundamentals
- Code quality
- Objects: the basics
- Data types
- Advanced working with functions
- Objects, classes, inheritance
- Error handling
----

### Javascript Fundamentals

#### The "script" tag
- We can use `<script>` tag to add Javascript code to the pages.
- The `type` and `language` attributes are not required.
- A script in an external file can be inserted with `<script> src="path/to/script.js"></script>`

#### The moden mode, "use strict"
- The strict mode is enabled by `"use strict"` at the top of the script. Also there are several language features like "classes" and "modules" that enable strict mode automatically.
- The strict mode is supported by all modern browsers.

#### Variables
- `let` - is a modern variable declaration. The code must be in strict mode to use `let` in Chrome (V8).
- `var` - is an old-school variable declaration.
- `const` - is like `let`, but the value of the variable can't be changed.

#### Data Types
- `number` for numbers of any kind: integer or floating-point.
- `string` for strings. A string may have one or more characters, there's no separate single-character type.
```javascript
// 3 types of quotes. (Double quotes, Single quotes, Backtics)
let str = "Hello";
let str2 = "Single quotes are ok too';
let phrase = `can embed ${str}`;
```
- `boolean` for `true`/`false`
- `null` for unknown values - a standalone type that has a single value `null`.
- `undefined` for unassigned values - a standalone type that has a single value `undefined`
- `object` for more complex data structures.
- `symbol` for unique identifiers.
- The `typeof` oerator allows us to see which type is stored in the variable.
```javascript
typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof "Symbol("id") // "symbol"
typeof Math // "object"
typeof null // "object"
typeof undefined // "object"
```

#### Type Conversions
- `ToString` - Occures when we output something, can be performed with `String(value)`.
- `ToNumber` - Occures in math operations, can be performed with `Number(value)`.

| Value |  Becomes... |
|-------|-------------|
|`undefined`|`NaN`|
|`null`|`0`|
|<code>true&nbsp;/&nbsp;false</code> | `1 / 0` |
| `string` | The string is read "as is", whitespaces from both sides are ignored. An empty string becomes `0`. An error gives `NaN`. |

- `ToBoolean` - Occures in logical oerations, or can be performed with `Boolean(value)`.

| Value |  Becomes... |
|-------|-------------|
|`0`, `null`, `undefined`, `NaN`, `""` |`false`|
|any other value| `true` |

- `undefined` is `NaN` as a number, not `0`.
- `"0"` and space-only string like `" "` are true as a boolean.


#### Comparisons
- Comparison operators return a logical value.
- Strings are compared letter-by-letter in the "dictionary" order.
- When values different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- Values `null` and `undefined` equal `==` each other and equal any other value.
- Be careful when using comparisons like `>` or `<` with variables that can occasionally be `null/undefined`. Making a separate check for `null/undeinfed` is a good idea.

#### Interaction: alert, prompt, confirm
- `alert` shows a message.
- `prompt` shows a message asking the user to input text. It returns the text or, if CANCEL or `key:Esc` is clicked, all browsers return `null`.
- `confirm` shows a message and waits for the user to press "OK" or "CANcEL". It returns `true` for OK and `false` for CANCEL/`key:Esc`.

#### Conditional operators: if, '?'
- `Ternary operator '?'`
```javascript
let accessAllowed = (age > 18) ? true : false;
```

#### Loops: while and for
- Lables for break/continue, A *label* is an identifier with a colon before a loop:
```javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
alert('Done!');
```

#### Functions
- Values passed to a function as parameters are copied to its local varialbes
- A function may access outer variables. But it works only from inside out. The code outside of the function doesn't see its local variables.
- A funciton can return a value. If it doesn't, then its result is undefined.

** Function Declaration & Function Expression **
```javascript
// Function Declaration
function sum(a, b) {
	return a + b;
}

// Function Expression
let sum = function(a, b) {
	return a + b;
};
```

- Functions are values. They can be assigned, copied or declared in any place of the code.
- If the function is declared as a separate statement in the main code flow, that's called a `"Function Declaration"`.
- If the function is created as a part of an expression, it's called a `"Function Expression"`.
- Function Declarations are processed before the code block executed. They are visible everywhere in the block.
- Function Expressions are created when the execution flow reaches them.

#### Javascript specials
- [Summary](http://javascript.info/javascript-specials/)