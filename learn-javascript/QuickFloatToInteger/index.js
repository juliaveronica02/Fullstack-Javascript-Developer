// if want to convert a float an integer, we can use
// Math.floor(), Math.ceil() or Math.round().
// but there is also a faster way to truncate a float to an
// integer using | (shift + \), the bitwise OR operator.

console.log("positive",23.9|0);
// result: positive 23.
console.log("negative",-23.9|0);
// result: negative -23.
// run: node index.js.