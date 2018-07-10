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
  