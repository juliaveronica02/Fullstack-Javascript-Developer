# JavaScript Global Objects `String`

---

## String `length`

The `length` property has the string length:

```js
console.log(`Hello`.length) // 5
```

```js
console.log(`My\n`.length) // 3
```

Note that `\n` is a single "special" character, so the length is indeed `3`.

Please note that `text.length` is a numeric property, not a function. There is no need to add parenthesis after it. People with a background in some other languages sometimes mistype by calling `text.length()` instead of just `text.length`. That doesn't work.

---

## Accessing Characters

To get a character at position `index`, use square brackets `[index]` or call the method `string.charAt(index)`. The first character starts from the zero position.

```js
const text = `Hello`

// the first character
console.log(text[0]) // H
console.log(text.charAt(0)) // H

// the last character
console.log(text[text.length - 1]) // o
```

The square brackets are a modern way of getting a character, while `charAt` exists mostly for historical reasons.

The only difference between them is that if no character is found, `[]` returns `undefined`, and `charAt` returns an empty string:

```js
let text = `Hello`

alert(text[1000]) // undefined
alert(text.charAt(1000)) // '' (an empty string)
```

We can also iterate over characters using `for...of`:

```js
for (let char of 'Hello') {
  alert(char) // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
```

---

## Strings are Immutable

Strings can not be changed in JavaScript. It is impossible to change a character.

```js
let text = 'Hi'

text[0] = 'h' // error
console.log(text[0]) // doesn't work
```

The usual workaround is to create a whole new string and assign it to `text` instead of the old one.

```js
const text = 'Hi'

const newText = 'h' + text[1] // create a new string

console.log(newText) // hi
```

---

## Changing the Character Case

- `toLowerCase()`: Change all character case to lower case
- `toUpperCase()`: Change all character case to upper case

```js
console.log('Hello'.toUpperCase()) // HELLO
console.log('Hello'.toLowerCase()) // hello
```

Or, if we want a single character lowercased:

```js
console.log('Hello'[0].toLowerCase()) // 'h'
```

---

## Searching for a Substring

There are multiple ways to look for a substring within a string.

### `string.indexOf(substr, pos)`

It looks for the `substring` in a `string`, starting from the given position `index`, and returns the position where the match was found or `-1` if nothing can be found.

```js
const text = 'Hello World ello'

console.log(text.indexOf('Hello')) // 0, 'Hello' is found at the beginning
console.log(text.indexOf('hello')) // -1, not found, the search is case-sensitive

console.log(text.indexOf('World')) // 6
console.log(text.indexOf('ello')) // 1, 'ello' is found first at the position 1, inside 'Hello'
```

The optional second parameter allows us to search starting from the given position. For instance, the first occurrence of `"ello"` is at position `1`. To look for the next occurrence, let's start the search from position `2`:

```js
const text = 'Hello World ello'

console.log(text.indexOf('ello', 2)) // 12
```

There is also a similar method `string.lastIndexOf(substring, position)` that searches from the end of a string to its beginning.

It would list the occurrences in the reverse order.

### `includes`, `startsWith`, `endsWith`

The more modern method `string.includes(substring, pos)` returns `true` or `false` depending on whether `string` contains `substring` within.

It's the right choice if we need to test for the match, but do not need its position.

```js
console.log('Widget with id'.includes('Widget')) // true

console.log('Hello'.includes('Bye')) // false
```

The optional second argument of `string.includes` is the position to start searching from.

```js
console.log('Midget'.includes('id')) // true
console.log('Midget'.includes('id', 3)) // false, from position 3 there is no "id"
```

The methods `string.startsWith` and `string.endsWith` do exactly what they say.

```js
console.log('Widget'.startsWith('Wid')) // true, "Widget" starts with "Wid"
console.log('Widget'.endsWith('get')) // true, "Widget" ends with "get"
```

---

## Special characters

It is still possible to create multiline strings with single quotes by using a so-called "newline character", written as `\n`, which denotes a line break:

```js
let guestList = 'Guests:\n * Alpha\n * Beta\n * Gamma'

console.log(guestList) // a multiline list of guests
```

For example, these two lines describe the same:

```js
console.log('Hello\nWorld') // two lines using a "newline symbol"

// two lines using a normal newline and backticks
console.log(`Hello
World`)
```

All special characters start with a backslash character `\`. It is also called an "escape character". There are other, less common "special" characters as well.

| Character | Description     |
| --------- | --------------- |
| `\b`      | Backspace       |
| `\f`      | Form feed       |
| `\n`      | New line        |
| `\r`      | Carriage return |
| `\t`      | Tab             |

We would also use it if we want to insert a quote into the string.

```js
console.log('"He said that", she said.') // "He said that", she said.
```

What if we need to show an actual backslash `\` within the string? That's possible, but we need to double it like `\\`:

```js
console.log(`The backslash: \\`) // The backslash: \
```

---

## JavaScript Global Objects String References

- [Strings](http://javascript.info/string)
