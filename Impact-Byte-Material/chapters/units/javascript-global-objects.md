# JavaScript Global Objects

## Global Objects

### Value Properties

These global properties return a simple value, they have no properties or methods.

- `Infinity`
- `NaN`
- `undefined`
- `null`
- `globalThis`

### Function Properties

These global functions—functions which are called globally rather than on an object—directly return their results to the caller.

- `eval()`
- `uneval()`
- `isFinite()`
- `isNaN()`
- `parseFloat()`
- `parseInt()`
- `decodeURI()`
- `decodeURIComponent()`
- `encodeURI()`
- `encodeURIComponent()`

### Fundamental objects

These are the fundamental, basic objects upon which all other objects are based. This includes objects that represent general objects, functions, and errors.

- `Object`
- `Function`
- `Boolean`
- `Symbol`
- `Error`
- `EvalError`
- `InternalError`
- `RangeError`
- `ReferenceError`
- `SyntaxError`
- `TypeError`
- `URIError`

### Numbers and Dates

These are the base objects representing numbers, dates, and mathematical calculations.

- `Number`
- `BigInt`
- `Math`
- `Date`

### Text Processing

These objects represent strings and support manipulating them.

- `String`
- `RegExp`

### Indexed Collections

These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.

- `Array`
- `Int8Array`
- `Uint8Array`
- `Uint8ClampedArray`
- `Int16Array`
- `Uint16Array`
- `Int32Array`
- `Uint32Array`
- `Float32Array`
- `Float64Array`

### Keyed Collections

These objects represent collections which use keys; these contain elements which are iterable in the order of insertion.

- `Map`
- `Set`
- `WeakMap`
- `WeakSet`

### Structured Data

These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (`JSON`).

- `JSON`
- `ArrayBuffer`
- `SharedArrayBuffer`
- `Atomics`
- `DataView`

### Control Abstraction Objects

- `Promise`
- `Generator`
- `GeneratorFunction`
- `AsyncFunction`

### Reflection

- `Reflect`
- `Proxy`

### Internationalization

Additions to the ECMAScript core for language-sensitive functionalities.

- `Intl`
- `Intl.Collator`
- `Intl.DateTimeFormat`
- `Intl.ListFormat`
- `Intl.NumberFormat`
- `Intl.PluralRules`
- `Intl.RelativeTimeFormat`

### WebAssembly

- `WebAssembly`
- `WebAssembly.Module`
- `WebAssembly.Instance`
- `WebAssembly.Memory`
- `WebAssembly.Table`
- `WebAssembly.CompileError`
- `WebAssembly.LinkError`
- `WebAssembly.RuntimeError`

---

## Interactive Functions

Some built in interactive functions or methods are modal. They pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations:

- The exact location of the modal window is determined by the browser. Usually, it’s in the center.
- The exact look of the window also depends on the browser. We can’t modify it.

That is the price for simplicity. There are other ways to show nicer windows and richer interaction with the visitor.

### `alert`

`alert` shows a message and pauses script execution until the user presses "OK".

```js
alert(message)
```

```js
alert('Hello World')
```

The mini-window with the message is called a _modal window_. The word "modal" means that the visitor can't interact with the rest of the page, press other buttons, etc. until they have dealt with the window. In this case, until they press "OK".

### `prompt`

`prompt` shows a modal window with a text message, an input field for the visitor, and the buttons OK/CANCEL. The function `prompt` accepts two arguments:

```js
const result = prompt(title[, default])
```

- `title`: The text to show the visitor.
- `default`: An optional second parameter, the initial value for the input field.

The visitor may type something in the prompt input field and press OK. Or they can cancel the input by pressing CANCEL or hitting the `key:Esc` key.

The call to `prompt` returns the text from the input field or `null` if the input was canceled.

```js
let age = prompt('How old are you?', 100)

console.log(`You are ${age} years old!`) // You are 100 years old!
```

### `confirm`

```js
const result = confirm(question)
```

The function `confirm` shows a modal window with a `question` and two buttons: OK and CANCEL. The result is `true` if OK is pressed and `false` otherwise.

```js
const isBoss = confirm('Are you the boss?')

console.log(isBoss)
// true if OK is pressed
// false if CANCEL is pressed
```

---

## Evaluate Code in String

### `eval()`

`eval()` is a function property of the global object.

The argument of the `eval()` function is a string. If the string represents an expression, `eval()` evaluates the expression. If the argument represents one or more JavaScript statements, `eval()` evaluates the statements. Do not call `eval()` to evaluate an arithmetic expression; JavaScript evaluates arithmetic expressions automatically.

If you construct an arithmetic expression as a string, you can use `eval()` to evaluate it at a later time. For example, suppose you have a variable `x`. You can postpone evaluation of an expression involving `x` by assigning the string value of the expression, say `3 * x + 2`, to a variable, and then calling `eval()` at a later point in your script.

```js
console.log(eval('2 + 2')) // 4

console.log(eval(new String('2 + 2'))) // 2 + 2

console.log(eval('2 + 2') === eval('4')) // true

console.log(eval('2 + 2') === eval(new String('2 + 2'))) // false
```

If the argument of `eval()` is not a string, `eval()` returns the argument unchanged. In the following example, the `String` constructor is specified and `eval()` returns a `String` object rather than evaluating the string.

```js
eval(new String('2 + 2')) // returns String object containing "2 + 2"
eval('2 + 2') // 4
```

But, `eval()` is a dangerous function, which executes the code it is passed with the privileges of the caller. If you run `eval()` with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage/extension. More importantly, a third-party code can see the scope in which `eval()` was called/invoked, which can lead to possible attacks in ways to which the similar Function is not susceptible.

`eval()` is also slower than the alternatives, since it has to invoke the JS interpreter, while many other constructs are optimized by modern JavaScript engines.

### `uneval()`

`uneval()` function creates a string representation of the source code of an `Object`.

But, it is not available in most browsers. This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

```js
const a = 1
uneval(a) // returns a String containing 1
```

```js
const b = '1'
uneval(b) // returns a String containing "1"
```

```js
uneval(function foo() {}) // "(function foo(){})"
```

```js
const a = uneval(function foo() {
  return 'hi'
})
const foo = eval(a)
foo() // "hi"
```

---

## JavaScript Global Objects References

- [Standard built-in objects - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [Interaction: alert, prompt, confirm](http://javascript.info/alert-prompt-confirm)
- [JavaScript Built-in Functions](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm)
- [JavaScript Global Reference](https://www.w3schools.com/jsref/jsref_obj_global.asp)
