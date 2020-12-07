var num1 = 10 // integer.
var num2 = 10.9 // Decimal number.
var num3 = 15
var div = num3 / num1;
console.log("div", div)
// run : node division.js.
// result: div 1.5.

var divByZero = num3 / 0;
console.log("0",divByZero);
// result: 0 Infinity.
console.log("typeOf",typeof(divByZero));
// result: typeOf number.