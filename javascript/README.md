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

                     
----

### Data types

#### Methods of primitives

- Primitives excetp `null` and `undefined` provide many helpful methods.
- Formally, thoes methods work via temporary objects, but Javaascript engines are well turned to optimize that internally, so they not expensive to call.

#### Number

- `toFixed` is a string. If the decimal part is shorter than required, zeroes are appended to the end:
  - We can convert it to a number using the unary plus or a `Number()` call: `+num.toFixed(5)`.
- `isFinite` and `isNaN`
  - `Infinite` (and `-Infinite`) is a special numeric value that is greater (less) than anything.
  - `NaN` represents an error.
 
**Compare with `Object.is`**
There is a special built-in method `Object.is` that compares value like `===`, but is more reliable for two edge cases:
  1. It works with `NaN`: `Object.is(NaN, NaN) === true`, that's good thing.
  2. Values `0` and `-0` are different: `Object.is(0, -0) === false`, it rarely matters, but these values technically are different.
  
  In all other cases, `Object.is(a, b)` is the same as `a === b`.
  
- `Math.floor`, `Math.ceil`, `Math.trunc`, `Math.round` or `num.toFixed(precision)`.

#### Strings

**Special characters**

There are other, less common "special" characters as well. Here's the list:

| Character | Description |
|-----------|-------------|
|`\b`|Backspace|
|`\f`|Form feed|
|`\n`|New line|
|`\r`|Carriage return|
|`\t`|Tab|
|`\uNNNN`|A unicode symbol with the hex code `NNNN`, for instance `\u00A9` -- is a unicode for the copyright symbol `©`. It must be exactly 4 hex digits. |
|`\u{NNNNNNNN}`|Some rare characters are encoded with two unicode symbols, taking up to 4 bytes. This long unicode requires braces around it.|


**Getting a substring**

| method | selects... | negatives |
|--------|-----------|-----------|
| `slice(start, end)` | from `start` to `end` (not including `end`) | allows negatives |
| `substring(start, end)` | between `start` and `end` | negative values mean `0` |
| `substr(start, length)` | from `start` get `length` characters | allows negative `start` |

- There are 3 types of quotes. Backtics allow a string to span multiple lines and embed expression.
- String in Javacsript are encoded using UTF-16
- We can use special characters like `\n` and insert letters by their unicode using `\u...`.
- To get a character, user: `[]`.
- To get a substring, use: `slice` or `substring` or `substr`.
- To lowercase/uppercase a string, use: `toLowerCase/toUpperCase`.
- To look for a string, use: `indexOf`, or `includes/startsWith/endsWith` for simple checks.
- To compare string according to a language, use: `localCompare`, otherwise they are compared by character codes. 


#### Arrays

**Trailing comma**
```javascript
let fruits = [
  "Apple",
  "Orange",
  "Plum",
];
```
The "trailing comma" style makes it easier to insert/remove items, because all lines become alike.

**simplest way to clear the array is: `arr.length = 0;`.**

- The `length` property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
- If we shorten `length` manually, the array is truncated.

We can use an array as a deque with the following operations:
- `push(...items)` add `items` to the end.
- `pop()` removes the element from the end and returns it.
- `shift()` removes the element from the beginning and returns it.
- `unshift(...items)` adds items to the beginning.

To loop over the elements of the array:
- `for (let i=0; i<arr.length; i++)` - works fastest, old-browser-compatible.
- `for (let item of arr)` - the modern syntax for items only.
- `for (let i in arr)` - **never use.**


#### Array methods

- To add/remove elements:
  - `push(...items)` add `items` to the end.
  - `pop()` removes the element from the end and returns it.
  - `shift()` removes the element from the beginning and returns it.
  - `unshift(...items)` adds items to the beginning.
  - `splice(pos, deleteCount, ...items)` - at index `pos` delete `deleteCount` elements and insert `items`.
  - `slice(start, end)` - creates a new array, copies elements from position `start` till `end` (not inclusive) into it.
  - `concat(...items)` - returns a new array: copies all members of the current one and adds items to it. If any of `items` is an array, then its elements are taken.

- To search among elements:
  - `indexOf/lastIndexOf(item, pos)` - look for `item` starting from position `pos`, return the index of `-1` if not found.
  - `includes(value)` - returns `true` if the array has `value`, otherwise `false`.
  - `find/filter(func)` - filter elements through the function, return first/all values that make it return `true`.
  - `findIndex` is like `find`, but returns the index instead of a value.

- To transform the array:
  - `map(func)` - creates a new array from results of calling `func` for every element.
  - `sort(func)` - sorts the array in-place, then return it.
  - `reverse()` - reverse the array in-place, then return it.
  - `split/join` - convert a string to array and back.
  - `reduce(func, initial)` - calculate a single value over the array by calling `func` for each element and passing an intermediate result between the calls.
  
- To iterate over elements:
  - `forEach(func)` - call `func` for every element, does not return anything.
  
- Additionally:
  - `Array.isArray(arr)` checks `arr` for being an array.
  
**`sort`, `reverse` and `splice` modifiy the array itself.**

[MDN web docs for Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### Iterables

**`Symbol.iterator` (a special built-in symbol just for taht)**
- When `for..of`starts, it calls that method (or error if not found).
- The method must return an *iteratot* - an object with the method `next`.
- When `for..of` wants the next value, it calls `next()` on that object.
- The result of `next()` must have the form `{done: Boolean, value: any}`, where `done == true` means that the iteration is finished, otherwise `value` must be the new value.

```javascript
let range = {
  from: 1,
  to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {
  
  // 2. ...it returns the iterator:
  return {
    current: this.from,
    last: this.to,
    
    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an Object {done: .., value: ..}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  }
};

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```

```javascript
let range = {
  from: 1,
  to: 5,
  
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  }
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
     }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```
**Array.from**
There's a universal method **Array.from** that brings them together. It takes an iterable or array-like value and makes a "real" `Array` from it. Then we can call array methods on it.
`Array.from(obj[, mapFn, thisArg])`
- `mapFn` should be the function to apply to each element before adding to the array
- `thisArg` allows to set `this` for it.

#### Map, Set, WeakMap and WeakSet

**Chaining**

Every `map.set` call returns the map itself, so we can "chain" the calls:

```javascript
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```

**Map**
- `Map` - is a collection of keyed values.
  The differences from a regular `Object`:
  - Any keys, objects can be keys.
  - Iterates in the insertion order.
  - Additional convenient methods, the `size` property.

- `new Map()` - creates the map.
- `map.set(key, value)` - stores the value by the key.
- `map.get(key)` - return the value by the key, `undefined` if `key` doesn't exist in map.
- `map.has(key)` - return `true` if the `key` exists, otherwise `false`.
- `map.delete(key)` - removes the value by the key.
- `map.clear()` - clears the map
- `map.size` - returns the current element count.

**Set**
- `Set` - is a collection of unique values.
  - Unlike an array, does not allow to reorder elements.
  - Keeps the insertion order.

- `new Set(iterable)` - creates the set, optionally from an array of values (any iterable will do).
- `set.add(value)` - adds a value, returns the set itself.
- `set.delete(value)` - removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`.
- `set.has(value)` - return `true` if the value exists in the set, otherwise `false`.
- `set.clear()` - removes everything from the set.
- `set.size` - is the elements count.

**WeakMap and WeakSet**
- `WeakMap` - a variant of `Map` that allows only objects as keys and removes them once become inaccessible by other means.
  - It does not support operations on the structure as a whole: noe `size`, no `clear()`, no iterations.
- `WeakSet` - is a variant of `Set` that only stores objects and removes them once they become inaccessible by other means.
  - Also does not support `size/clear()` and iterations.
  
- `weakMap.get(key)`
- `weakMap.set(key)`
- `weakMap.delete(key, value)`
- `weakMap.has(key)`

`WeakMap` and `WeakSet` are used as "secondary" data structures in addition to the "main" object storage. Once the object is removed from the main storage, so it only stays in `WeakMap/WeakSet`, they clean up automatically.

#### Object.keys, values, entries

- `Object.keys(obj)` - returns an array of keys.
- `Object.values(obj)` - returns an array of values.
- `Object.entries(obj)` - returns an array of `[key, value]` pairs.

...But please note the distinctions (compared to map for example):

|             | Map              | Object       |
|-------------|------------------|--------------|
| Call syntax | `map.keys()`  | `Object.keys(obj)`, but not `obj.keys()` |
| Returns     | iterable    | "real" Array                     |

#### Destructuring assignment

- Destructuring assignment allows for instantly mapping an object or array onto many variables.
- The object syntax:

  `let {prop: varName = default, ...rest} = object'`
  
  This means that property `prop` should go into the variable `varName` and, if no such property exists, then `default` value should be used.
- The array syntax:

  `let [item1 = default, item2, ...rest] = array;`
  
  The first item goes to `item1`, the second goes into `item2`, all the rest makes the array `rest`.
- For more complex cases, the left side must have the same structure as the right one.

#### Date and time

- Date and time in Javascript are represented with the `Date` object. We can't create "only date" or "only time": `Date` objects always carray both.
- Months are counted from zero (yes, January is a zero month).
- Days of week in `getDay()` are also counted from zero (that's Sunday).
- `Date` auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.
- Dates can be subtracted, gibing their difference in milliseconds. That's because a `Date` becomes the timestamp when converted to nmmber.
- User `Date.now()` to get the current timestamp fast.

#### JSON methods, toJSON

- `JSON.stringify` to convert objects into JSON.
- `JSON.parse` to convert JSON back into an object.

Natively supported JSON types are:
- Object `{ ... }`
- Arrays `[ ... ]`
- Primitives:
  - strings, numbers, boolean values `true/false`, `null`

The full syntax of `JSON.stringify` is:

`let json = JSON.stringify(value[, replacer, space])`

**value** A value to encode.

**replacer** Array of properties to encode or a mapping function `function(key, value)`.

**space** Amount of space to use for formatting

The full syntax of `JSON.parse` is:

`let value = JSON.parse(str[, receiver]);`

**str** JSON-string to parse.

**receiver** Optional function(key, value) that will be called for each `(key, value)` pair and can transform the value.

- JSON is a data format that has its own independent standard and libraries for most programming languages.
- JSON supports plain objects, arrays, strings, numbers, booleans and `null`.
- Javascript provides methods `JSON.stringify` to serialize into JSON and `JSON.parse` to read from JSON.
- Both methods support transformer functions for smart reading/writing.
- If an object has `toJSON`, then it is called by `JSON.stringify`.

                     
----

### Advanced working with functions

#### Recursion and stack

- *Recursion* is a programming term that means a "self-calling" function. Such functions can be used to solve certain tasks in elegant ways.
  When a function calls itself, that's calld a *recursion step*. The *basis* of recursion is function arguments that make the task so simple that the function does not make further calls.
- A recursively-defined data structure is a data structure that can be defined using itself.
  For instance, the linked list can be defined as a data structure consisting of an object referencing a list (or null).
  
  `list = { value, next -> list }`

#### Rest parameters and spread operator

- The rest parameters must be at the end

    ```javascript
    function f(arg1, arg2, ...rest) { }
    ```
    The `...rest` must always be last.
    
- Arrow functions do not have "arguments".

When we see `"..."` in the code, it is either rest parameters or the spread operator.
There's an easy way to distinguish between them:

- When `...` is at the end of function parameters, it's "rest parameters" and gathers the rest of the list of arguments into an array.
- When `...` occurs in a function call or alike, it's called a "spread operator" and expands an array into a list.

Use patterns:

- Rest parameters are used to create functions that accept any number of arguments.
- The spread operator is used to pass an array to functions that normally require a list of many arguments.

Together they help to travel between a list and an array of parameters with ease.

All arguments of a function call are also avaliable in "old-style" `arguments`: array-like iterable object.

#### Closure

The **Lexical Environment** object consists of two parts:

1. *Environment Record* - an object that has all local variables as it properties (and some other information like the value of `this`).
2. A reference to the *outer lexical environment*, usually the one associated with the code lexically right outside of it (outside of the current curly brackets).

**Closures**

A closure is a function that remembers its outer variables and can access them.

That is: they automatically remember where they were created using a hidden **[[Environment]]** property, and all of them can access outer variables.

**IIFE(Immediately-invoked funtion expression)**

The Function Expression is wrapped with brackets `(function { ... })`, because when javascript meets `"function"` in the main code flow, it understands it as the start of a Function Declaration.

```javascript
// Ways to create IIFE

(function() {
  alert("Brackets around the function");
})();

(function() {
  alert("Brackets around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();
```

#### The Old "var"

- "var" has no block scope. 
- "var" are processed at the function start. (Declarations are hoisted, but assignments are not.)

There are two main differences of `var` :

1. Variables have no block scope, they are visible minimum at the function level.
2. Variable declaration are processed at function start.

#### Global object

**"this" and global object**

1. In the browser, the value of `this` in the global area is `window`: `this === window // true`

2. When a function with `this` is called in **non-strict mode**, it gets the global object as `this`: 

#### Function object, NFE

- Functions are objects.
- Fuctions properties:
  - `name` - the function name, Exists not only when given in the function definition, but also for assignments and object properties.
  - `length` - the number of arguments in the function definition. *Rest* parameters are not counted.

If the function is decalred as a Function Expression (not in the main code flow), and it carries the name, then it is called a *Named Function Expression*.
The Name can be used inside to reference itself, for recursive calls or such.

Also, functions may carry additional properties.

**Named Function Expression**, or **NFE**, is a term for Function Expressions that have a name.


#### The "new Function" syntax

The syntax for creating a function:

`let func = new function([arg1[, arg2[, ...argN],] functionBody)`

For historical reason, arguments can also be given as a comma-separated list.

These three mean the same:

```javascript
new Function('a', 'b', 'return a + b'); // basic syntax
new Function('a,b', 'return a + b'); // comma-separated
new Function('a, b', 'return a + b'); // comma-separated with spaces
```

Function created with `new Function`, have `[[Environment]]` referencing the global Lexical Environment, not the outer one.
Hence, they cannot use outer variables. But that's actually good, because it saves us from error.
Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers.

#### Scheduling: setTimeout and setInterval

- `setTimeout` allows to run a function onece after the internal of time. (Canceling with `clearTimeout`)
  `let timerId = setTimeout(func|code, delay[, arg1, arg2, ...])`
  
- `setInterval` allows to run a function regularly with the interval between the runs.
  `let timerId = setInterval(func|code, delay[, arg1, arg2, ...])`

**Recursive setTimeout**

```javascript
/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

**Recursive `setTimeout` guarantees a delay between the executions, `setInterval` - does not.**

![Recursive setTimeout](http://javascript.info/article/settimeout-setinterval/settimeout-interval@2x.png)

- The recursive `setTimeout` guarantees the fixed delay (here 100ms).

**setTimeout(..., 0)** (special use case)

In the browser, there's a limitation of how often nested timer can run.
The HTML5 standard says: "after five nested timers, the interval is forced to be at least four milliseconds.".

- Methods `setInterval(func, delay, ...args)` and `setTimeout(func, delay, ...args)` allow to run the `func` regularly/once after `delay` milliseconds.
- To cancel the execution, we should call `clearInterval/clearTimeout` with the value returned by `setInterval/setTimeout`.
- Nested `setTimeout` calls in a more flexible alternative to `setInterval`. Also they can gurantee the minimal time *between* the executions.
- Zero-timeout scheduling `setTimeout(..., 0)` is used to schedule the call "as soons as possible, but after the current code is complete".

Some use cases of `setTimeout(..., 0)`:

- To split CPU-hungry tasks into pieces, **so that the script doesn't "hang"**
- To let the browser do something else while the process is going on (paint the progress bar).

Please note that all schedulling methods do not *gurantee* the exact delay.
We should not rely on that in the scheduled code.

For example, the in-browser timer may slow down for a lot of reasons:

- The CPU is overloaded.
- The browser tab is in the background mode.
- The laptop is on battey.

All that may increase the minimal timer resolution (the minimal delay) to 300ms
or even 1000ms depending on the browser and setting.

#### Decorators and forwarding, call/apply

**Decorator**: a special function that takes another function and alter it behavior.
(다른 함수를 취해 그 동작을 변경시키는 특별한 함수.)

**`func.call` for the context**

`func.call(context, arg1, arg1, ...)`

It runs func providing the first argument as `this`, and the next as the arguments.

**`func.apply`**

`func.apply(context, args)` `args` as the list of arguments.

The only syntax difference between `call` and `apply` is that `call` expects a list of arguments,
while `apply` takes an array-like object with them.

- Use spread operator `...` for `call` **`apply` will probably be faster than `call`**

```javascript
let args = [1, 2, 3];

func.call(context, ...args); // pass the array as list with spread operator
func.apply(context, args); // is same as using apply
```

- The spread operator `...` allows to pass iterable `args` as the list to `call`.
- The `apply` accepts only *array-like* `args`.

**Borrowing a method**

`[].join.call(arguments)` 

*Decoragtor* is a wrapper around a function that alters its behavior. The main job is still carried out by the function.

- `func.call(context, arg1, arg2, ...)` - calls `func` with given context and arguments.
- `func.apply(context, args)` - calls `func` passing `context` as `this` and array-like `args` into a list of arguments.

The generic *call forwarding* is usually done with `apply`:

```javascript
let wrapper = function() {
  return original.apply(this, arguments);
}
```

#### Function binding

**Convenience method: `bindAll`**

If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:

```javascript
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
```

Method `func.bind(context, ...args)` returns a "bound variant" of function `func` that fixes the context `this` and first arguments if given.

Usually we apply `bind` to fix `this` in an object method, so that we can pass it somewhere. For example, to `setTimeout`.
There are more reason to `bind` in the modern development, we'll meet them later.



Javascript libraries also probide functions for convenient mass binding, e.g. `_bindAll(obj)` in *lodash*.


#### Currying and partials

The full syntax of `bind`:

`let bound = func.bind(context, arg1, arg12, ...);`

Partial applicaton is useful when we have a very generic function, and want a less universal variant of it for convenience.

For instance, we have a function `send(from, to, text)`. Then, inside a `user` object we may want to use a partial variant of it:
`sendTo(to, text)` that sends from the current user.

**Going partial without context**

The native `bind` does not allow without context parameter. We can't just omit the context and jump to arguments.

Example of this:

```javascript
function partial(func, ...argsBound) {
  return function(...args) {
    return func.call(this, ...argsBound, ...args);
  }
}

// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// add a partial method that says something now fixing the first argument
user.sayNow = partial(user.say, new Date().getHour() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// something like: [10:00] Jone: Hello!
```

**Currying** is translating a function from callable as `f(a, b, c)` into callable as `f(a)(b)(c)`.

Advanced currying allows both to keep the function callable normally and to get partials easily.

- When we fix some arguments of an existing function, the resulting (less universal) function is called *a partial*.
We can use `bind` to get a partial, but there are other ways also.

  Partials are convenient when we don't want to repeat the same argument over and over again.
  Like if we have a `send(from, to)` function, and `from` should always be the same for our task, we can get a partial and go on with It.
  
- *Curring* is a transform that makes `f(a, b, c)` callable as `f(a)(b)(c)`.
Javascript implementations usually both keep the function callable normarlly and return the partial if arguments count is not enough.

  Curring is great when we want easy partials. As we've seen in the logging example: the universal function `log(date, importance, message)` 
  after curring gives us partials when called with one argument like `log(date)` or two arguments `log(date, importance)`.

#### Array functions revisited

**Arrow functions VS bind**

- `.bind(this)` creates a "bound version" of the function.
- The array `=>` doesn't create any binding. The function simply doesn't have `this`.
The lookup of `this` is made exactly the same way as a regular variable search: in the outer lexical environment.

**Arrows have no "arguments"**

Arrow functions:

- Do not have `this`.
- Do not have `arguments`.
- Can't be called with `new`.
- (They also don't have `super`.
















