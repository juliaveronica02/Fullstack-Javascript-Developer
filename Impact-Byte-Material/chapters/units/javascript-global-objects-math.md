# JavaScript Global Objects `Math`

JavaScript has a built-in [Math](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) object which contains a small library of mathematical functions and constants.

---

## Rounding

There are several built-in functions for rounding:

- `Math.floor`: Rounds down: `3.1` becomes `3`, and `-1.1` becomes `-2`.
- `Math.ceil`: Rounds up: `3.1` becomes `4`, and `-1.1` becomes `-1`.
- `Math.round`: Rounds to the nearest integer: `3.1` becomes `3`, `3.6` becomes `4` and `-1.1` becomes `-1`.
- `Math.trunc` (not supported by Internet Explorer): Removes anything after the decimal point without rounding: `3.1` becomes `3`, `-1.1` becomes `-1`.

| Input  | Math.floor | Math.ceil | Math.round | Math.trunc |
| ------ | ---------- | --------- | ---------- | ---------- |
| `3.1`  | `3`        | `4`       | `3`        | `3`        |
| `3.6`  | `3`        | `4`       | `4`        | `3`        |
| `-1.1` | `-2`       | `-1`      | `-1`       | `-1`       |
| `-1.6` | `-2`       | `-1`      | `-2`       | `-1`       |

---

## `parseInt()` and `parseFloat()`

Numeric conversion using a plus `+` or `Number()` is strict. If a value is not exactly a number, it fails:

```js
console.log(+'100px') // NaN
```

The sole exception is spaces at the beginning or at the end of the string, as they are ignored.

But in real life we often have values in units, like `"100px"` or `"12pt"` in CSS. Also in many countries the currency symbol goes after the amount, so we have `"19€"` and would like to extract a numeric value out of that.

That's what `parseInt` and `parseFloat` are for.

They "read" a number from a string until they can't. In case of an error, the gathered number is returned. The function `parseInt` returns an integer, whilst `parseFloat` will return a floating-point number:

```js
console.log(parseInt('100px')) // 100
console.log(parseFloat('12.5em')) // 12.5

console.log(parseInt('12.3')) // 12, only the integer part is returned
console.log(parseFloat('12.3.4')) // 12.3, the second point stops the reading
```

There are situations when `parseInt`/`parseFloat` will return `NaN`. It happens when no digits could be read:

```js
console.log(parseInt('a123')) // NaN, the first symbol stops the process
```

---

## `Math.random()`

`Math.random()`

Returns a random number from `0` to `1` (not including `1`).

```js
alert(Math.random()) // 0.1234567894322
alert(Math.random()) // 0.5435252343232
alert(Math.random()) // ... (any random numbers)
```

---

## `Math.max(a, b, c...)` / `Math.min(a, b, c...)`

Returns the greatest or smallest from the arbitrary number of arguments.

```js
alert(Math.max(3, 5, -10, 0, 1)) // 5
alert(Math.min(1, 2)) // 1
```

---

## `Math.pow(n, power)`

Returns `n` raised the given power

```js
alert(Math.pow(2, 10)) // 2 in power 10 = 1024
```

There are more functions and constants in `Math` object, including trigonometry, which you can find in the [docs for the Math object](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math).

---

## JavaScript Global Objects `Math` References

- [Math - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
