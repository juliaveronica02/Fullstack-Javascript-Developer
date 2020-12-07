# JavaScript Global Objects `Number`

---

## `toString(base)`

The method `num.toString(base)` returns a string representation of `num` in the numeral system with the given `base`. The `base` can vary from `2` to `36`. By default it's `10`.

Common use cases for this are:

- **base=16** is used for hex colors, character encodings etc, digits can be `0..9` or `A..F`.
- **base=2** is mostly for debugging bitwise operations, digits can be `0` or `1`.
- **base=36** is the maximum, digits can be `0..9` or `A..Z`. The whole latin alphabet is used to represent a number.

```js
const age = 25

console.log(age.toString()) // 25
console.log(age.toString(2)) // 11001
console.log(age.toString(16)) // 19
```

---

## `toFixed()`

`toFixed()` rounds the number to `n` digits after the point and returns a string representation of the result.

```js
const num = 12.34
console.log(num.toFixed(1)) // "12.3"
```

This rounds up or down to the nearest value, similar to `Math.round`:

```js
const num = 12.36
console.log(num.toFixed(1)) // "12.4"
```

Please note that result of `toFixed` is a string. If the decimal part is shorter than required, zeroes are appended to the end:

```js
const num = 12.34
console.log(num.toFixed(5)) // "12.34000", added zeroes to make exactly 5 digits
```

We can convert it to a number using the unary plus or a `Number()` call: `+num.toFixed(5)`.

---

## JavaScript Global Objects `Number` References

- [Numbers](http://javascript.info/number)
