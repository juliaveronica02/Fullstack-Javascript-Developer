# JavaScript Comparisons

We know many comparison operators from maths:

- Greater/less than: `a > b`, `a < b`.
- Greater/less than or equals: `a >= b`, `a <= b`.
- Equals: `a == b`, `a === b`. Please note the double equals sign `=`. A single symbol `a = b` would mean an assignment.
- Not equals. In maths the notation is `≠`, but in JavaScript it’s written as an assignment with an exclamation sign before it: a `!=` b, combination of `!` and `=`.

## The Result is `Boolean`

Like all other operators, a comparison returns a value. In this case, the value is a boolean, either `true` or `false`.

- `true` means "yes", "correct", "the truth", "truthy".
- `false` means "no", "wrong", "not the truth", "falsy".

```js
console.log(2 > 1) // true (correct)
console.log(2 == 1) // false (wrong)
console.log(2 != 1) // true (correct)
```

A comparison result can be assigned to a variable, just like any value:

```js
const result = 5 > 4 // assign the result of the comparison
console.log(result) // true
```

## String Comparison

To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

In other words, strings are compared letter-by-letter.

```js
console.log('Z' > 'A') // true
console.log('Glow' > 'Glee') // true
console.log('Bee' > 'Be') // true
```

The algorithm to compare two strings is simple:

- Compare the first character of both strings.
- If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
- Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
- Repeat until the end of either string.
- If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

In the examples above, the comparison `'Z' > 'A'` gets to a result at the first step while the strings `"Glow"` and `"Glee"` are compared character-by-character:

- `G` is the same as `G`.
- `l` is the same as `l`.
- `o` is greater than `e`. Stop here, the first string is greater.

The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.

For instance, case matters. A capital letter `"A"` is not equal to the lowercase `"a"`. The lowercase `"a"` is greater because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode).

### Strict Equality

A regular equality check double equal `==` has a problem. It cannot differentiate fully if the values are really different. So we have to use triple equal `===`.

```js
console.log('1' == 1) // true
console.log('1' === 1) // false
```
