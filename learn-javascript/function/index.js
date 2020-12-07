// rumus.
// function in javascript.
// function functionName(param1, param2, ..., paramN) {
    // block of code.
// }

// 1. example.
function mSum(){
    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;
    console.log("sum", sum);
    // theres nothing to print in the console.
    // because use a function need call and do call a function,
    // read function names followed by the emphasis.
}
// so add this.
mSum()
// this is little statement, the function name with buttons is, as it calls a function of the function is executed.
// result: sum 30.

// 2. example.
function mSum2(){
    var num3 = 30;
    var num4 = 40;
    var sum2 = num3 + num4;
    return sum2
}
console.log("sum2",mSum2());
// result: sum2 70.

// 3. example.
function mSum2(){
    var num3 = 30;
    var num4 = 40;
    var sum2 = num3 + num4;
    // return sum2
    console.log("Im a print statement");
}
console.log("sum2",mSum2());
// result: sum2 undefined.
// so must add return sum2.

// 4. example.
function mSum2(){
    var num3 = 30;
    var num4 = 40;
    var sum2 = num3 + num4;
    return sum2
    console.log("Im a print statement");
}
var totalSum = 100 + mSum2()
console.log("total", totalSum);
// result: total 170.