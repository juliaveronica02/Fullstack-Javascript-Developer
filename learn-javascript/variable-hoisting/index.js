// hoisting is a mechanism, where variable and function can be used before declaring them is called hoisting in javascript.
console.log(num1); // result is undefined.
num1 = 10;
console.log(num1);
var num1;
// result: 10.

str1 = "Demo String"
console.log(str1);
var str1;
// result: Demo String.

// code execution.
// the variables and function declarations are moved to the top
// of their scope before code execution.
// javascript has two steps in executing a particular script.
// step one is creation.
// step two is execution.

sum(5,10); // result : 15.
sum(30,22); // result : 52.
function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(90, 8) // result: 98.