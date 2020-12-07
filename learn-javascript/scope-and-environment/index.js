// 1. example.
var num1 = 10; // num1 is a global variable.
function sum(num2){
    var total = num1 + num2; // total is a local variable.
    console.log("example 1: ", total); // local scope of num1.
}
console.log("example 1: ", num1); // global scope of number 1.
// result: example 1:  10.

// 2. example.
// var num1 = 10; already at 1. example so don't need to write.
// if you confuse can console.log like code bellow.
console.log(num1); // and the result is 10 when you run the code.
// if we put console.log(num2) on this line it will show the error at google chrome (num2 is not defined).
// if we run at visual studio code everything is good.
function sum(num2) {
    console.log(num1); // to see the number one is defined on the function.
    console.log(num1 + num2);
}
sum(20)
// result: 30.

// 3. example.
// var num1 = 10; already at 1. example so don't need to write.
console.log(num1);
function sum(num2) {
    var total = num1 + num2;
    console.log(num1);
    console.log(total);
}
// console.log(total); if we put this it will error because outside of the function.
console.log(num1);
sum(20)
// result: 
// 10
// 10
// 10
// 30

// 4. example.
// var num1 = 10; already at 1. example so don't need to write.
function sum(num2){
    var total;
    total = num1 + num2;
    console.log(total);
}
sum(20)
sum(50)
// result:
// 30
// 60