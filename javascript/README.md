# The Modern Javascript 

### Reference
- [javascript.info](http://javascript.info/)
- [github-javascript-tutorial](https://github.com/iliakan/javascript-tutorial-en)
                     
----

현재 학습중인 자바스크립트의 중요 내용들을 정히라는 공간이며,
위 `javascript.info` 사이트를 통하여 정리된 내용의 상세 내용을 확인하실 수 있습니다.

**Table of Contents**
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
let str2 = "Single quotes are ok too";
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
typeof Symbol("id") // "symbol"
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

                     
----

### Code quality

#### Debugging in Chrome
- Debugger command
```javascript
function hello(name) {
	let phrase = `Hello, ${name}!`;
	
	debugger; // the debugger stop here
	
	say(pharase);
}

function say(phrase) {
	alert(`** ${phrase} **`);
}
```
![debugger command](http://javascript.info/article/debugging-chrome/chrome-sources-debugger-pause.png)

#### Coding style
- Style guides
	- [Google Javascript Style Guide](https://google.github.io/styleguide/jsguide.html)
	- [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)
	
#### Comments
- Describe the architecture
- Document a function usage. [JSDoc](https://en.wikipedia.org/wiki/JSDoc)

**Comment this:**
- Overall architecture, high-level view.
- Funciton usage.
- Important solutions, especially when not immediatly obvious.

**Avoid comments:**
- That tell "how code works" and "what is does".
- Put them only if it's impossible to make the code so simple and self-descriptive that is doesn't require thoese.


#### Automated testing with mocha
Automated testing means that tests are written **separately**, in addition to the code. They can be executed easily and check all the main use cases.

**Behavior Driven Development (BDD)**
In BDD, the spec goes first, followed by implementation. At the end we have both the spec and the code.
The spec can be used in three ways:
1. **Tests** gurantee that the code work correctly.
2. **Docs** - the titles of `describe` and `it` tell what the function does.
3. **Example** - the tests are actually working examples showing how a function can be used.

With the spec, we can safely improbe, change, even rewirete the function from scratch and make sure it still works right.


                     
----

### Objects: the basics

#### Objects
- Computed properties
```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
	[fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```
- Cloning and merging, `Object.assign`
```javascript
// Object.assign(dest[, src1, src2, src3, ...])

let usr = {
	name: "John",
	age: 30
};

let clone = Object.assign({}, user);
```
- To make a "real copy" (a clone) we can use `Object.assign` or `_.cloneDeep(obj)`.

#### Garbage collection
- Garbage collection is performed automatically. We cannot force or prevent it.
- Objects are retained in memory while they are **reachable**
- Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole.


#### Symbole type
**Symbol** is a primitive type unique identifieres.

Symbols are always different values, evnt if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: `Symbol.for(key)` returns (creates if needed) a global symbol with `key`1 as the name. Multiple call of `Symbol.for` return exactly the same symbol.

#### Object methods, "this"
**The value of Reference Type** is a three-value combination `(base, name, strict)`, where:
- `base` is the object.
- `name` is the property.
- `strict` is true if `use strict` is in effect.

**Arrow functions have noe "this"**
Arrow function don't have "own" `this`.
It's useful when we actually do not want to have a separate `this`, but rather to take it from the outer context.

- Functions that are stored in object properties are calld "methods".
- Methods allow object to "act" like `object.doSomething()`.
- Methods can reference the object as `this`.

The value of `this` is defined at run-time.

- When a function is declared, it may use `this`, but that `this` has no value until the function is called.
- That function can be copied between objects.
- When a function is called in the "method" syntax: `object.method()`, the value of `this` during the call is `object`.

#### Object to primitive conversion
**ToPrimitive**
When an object is used in the context where a primitive is required, for instance, in an `alert` or mathematical operations, it's converted to a primitive value using the `ToPrimitive` algorithm.

The object-to primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

There are 3 types (hints) of it:

- `"String"` (for `alert` and other string conversion)
- `"number"` (for maths)
- `"default"` (few operators)

**To do the conversion, Javascript tries to find and call three object methods:**
1. Call `obj[Symbol.toPrimitive](hint)` if the method exists,
2. Otherwise if hint is "string"
	- try `obj.toString()` and `obj.valueOf()`, whatever exists.
3. Otherwise if hint is "number" or "default"
	- try `obj.valueOf()` and `obj.toString()`, whatever exists.

```javascript
obj[Symbol.toPrimitive] = function(hint) {
	// return a primitive value
	// hint = one of "string", "number", "default"
}
```

```javascript
let user = {
	name: "Jone",
	money: 1000,
	
	[Symbol.toPrimitive](hint) {
		alert(`hint: ${hint}`);
		return hint == "string" ? `{name: "${this.name}"}` : this.money;
	}
};

// conversion demo:
alert(user); // hint: string -> {name: "Jone"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

If there's no `Symbol.toPrimitive` then Javascript tries to find them and try in the order:
- `toString -> valueOf` for "string" hint.
- `valueOf -> toString` otherwise.

```javascript
let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
```

#### Constructor, operator "new"

The main purpose of constructors - to implement reusable object creation code.

**Dual-syntax constructors: new.target**
Inside a function, we can check whether it was called with `new` or without it, using special `new.target` property.

```javascript
function User(name) {
	if (!new.targer) { // if you run me without new
		return new User(name); // ...I will add new for you
	}
	
	this.name = name;
}

let john = User("John"); // redirect call to new User
alert(john.name); // John
```

- Constructor functions or, briefly, constructors, are regular functions, but there's a common agreement to name them with capital letter first.
- Constructor function should only be called using `new`. Such a call implies a creation of empty `this` at the start and returning the populated one at the end.
















