# JavaScript Data Types

Most of the time, a JavaScript application needs to work with information. Here are two examples:

- An online shop – the information might include goods being sold and a shopping cart.
- A chat application – the information might include users, messages, and much more.

Variables are used to store this information.

There are 7 basic types in JavaScript.

- `number` for numbers of any kind: integer or floating-point.
- `string` for strings. A string may have one or more characters, there’s no separate single-character type.
- `boolean` for `true`/`false`.
- `null` for unknown values – a standalone type that has a single value null.
- `undefined` for unassigned values – a standalone type that has a single value undefined.
- `object` for more complex data structures.
- `symbol` for unique identifiers.

The `typeof` operator allows us to see which type is stored in a variable.

- Two forms: `typeof x` or `typeof(x)`.
- Returns a string with the name of the type, like `"string"`.
- For `null` returns `"object"` – this is an error in the language, it’s not actually an object.

Remember, blob assets such as images, photos, videos are not JavaScript data types. So actually we cannot store those inside JavaScript program. But we can access it through the file system.

---

## Dynamic Typing

A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number:

Programming languages that allow such things are called “dynamically typed”, meaning that there are data types, but variables are not bound to any of them.

```js
let message = 'hello'
message = 123456
```

---

## Number

The number type represents both integer and floating point numbers.

```js
let n = 123
n = 12.345
```

---

## String

A string in JavaScript must be surrounded by quotes.

```
let text = "Hello World"
let textOther = 'Single quotes are okay too'
let textLonger = `We can embed ${text}`
```

In JavaScript, there are 3 types of quotes.

- Double quotes:

```
"Hello"
```

- Single quotes:

```
'Hello'
```

- Backticks:

```
`Hello`
```

Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in `${…}`, for example:

```js
let name = 'John'

// embed a variable
console.log(`Hello, ${name}!`) // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`) // the result is 3

// multiple lines
console.log(`Title
Line One
Line Two
`)

// multiple lines affected by line break and indentation
console.log(`
  # Title
  
  - Line One
  - Line Two
`)
```

In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is `char`.

In JavaScript, there is no such type. There’s only one type: `string`. A string may consist of only one character or many of them.

---

## Boolean (logical type)

The boolean type has only two values: `true` and `false`.

This type is commonly used to store yes/no values: `true` means “yes, correct”, and `false` means “no, incorrect”.

```js
let nameFieldChecked = true // yes, name field is checked
let ageFieldChecked = false // no, age field is not checked
```

Boolean values also come as a result of comparisons:

```js
let isGreater = 4 > 1

alert(isGreater) // true (the comparison result is "yes")
```

---

## `null`

The special null value does not belong to any of the types described above.

It forms a separate type of its own which contains only the null value:

```js
let age = null
```

In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

`null` is not the same as `undefined`.

---

## `undefined`

The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined:

```js
let x

alert(x) // shows "undefined"
```

Technically, it is possible to assign undefined to any variable:

```js
let x = 123

x = undefined

alert(x) // "undefined"
```

---

## Objects

All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

```js
const human = {
  name: 'Brendan Eich',
  website: 'https://brendaneich.com',
  twitter: 'https://twitter.com/BrendanEich',
  github: 'https://github.com/BrendanEich',
  'about-me':
    'Brendan Eich is an American technologist and creator of the JavaScript programming language'
  // multiword property name must be quoted
}
```

---

## `typeof` Operator

The typeof operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.

It supports two forms of syntax:

- As an operator: `typeof x`.
- As a function: `typeof(x)`.

In other words, it works with parentheses or without them. The result is the same.

The call to typeof x returns a string with the type name:

```js
typeof 'foo' // "string"
typeof 0 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
```

---

## JavaScript Data Types References

- [Data representation - KS3 Computing - BBC Bitesize](https://www.bbc.com/bitesize/topics/zxnfr82)
- [`yangshun/lago`](https://github.com/yangshun/lago)
