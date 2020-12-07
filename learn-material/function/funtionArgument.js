// 1. example.
function greetings(){
    console.log("Welcome");
}
greetings();
// result: welcome.

// 2. example.
function greetings(personName){
    console.log("Welcome" + personName);
}
greetings();
// result: undefined.

// 3. example.
function greetings(personName){
    console.log("Welcome " + personName);
}
greetings("Juve");
// result: Welcome Juve.

// 4. example.
function totalSum (num1, num2) {
    console.log("num1 => " + num1);
    console.log("num2 => " + num2);
    console.log(num1 + num2);
}
totalSum()
// result:
// num1 => undefined
// num2 => undefined
// NaN

// 5. example
function totalSum (num1, num2) {
    console.log("num1 => " + num1);
    console.log("num2 => " + num2);
    console.log(num1 + num2);
}
totalSum(2,7)
// result:
// num1 => 2
// num2 => 7
// 9
totalSum(22,38)
// result:
// num1 => 22
// num2 => 38
// 60

// 6. example.
function totalSum (num1, num2, num3) {
    console.log("num1 => " + num1);
    console.log("num2 => " + num2);
    console.log("num3 => " + num3);
    console.log(num1 + num2);
}
totalSum(2,7)
// result:
// num1 => 2
// num2 => 7
// num3 => undefined
// 9

// 7. example.
function totalSum (num1, num2, num3=40) {
    console.log("num1 => " + num1);
    console.log("num2 => " + num2);
    console.log("num3 => " + num3);
    console.log(num1 + num2);
}
totalSum(2,7)
// result:
// num1 => 2
// num2 => 7
// num3 => 40
// 9

// 8. example.
function totalSum (num1, num2, num3=40) {
    console.log("num1 => " + num1);
    console.log("num2 => " + num2);
    console.log("num3 => " + num3);
    console.log(num1 + num2);
}
totalSum(2,7,9)
// result:
// num1 => 2
// num2 => 7
// num3 => 9 
// 9

// 9. example.
function totalSum (num1 = 10, num2 = 20, num3=40) {
    console.log("num1 => " + num1);
    console.log("num2 => " + num2);
    console.log("num3 => " + num3);
    console.log(num1 + num2 + num3);
}
totalSum()
// result:
// num1 => 10
// num2 => 20
// num3 => 40
// 70

// 10. example.
function totalSum (num1, num2, num3) {
    console.log("num1 => " + num1);
    console.log("num2 => " + num2);
    console.log("num3 => " + num3);
    if(num3 !== undefined){
        console.log(num1 + num2 + num3);
    }
    else {
    console.log(num1 + num2);
    }
}
totalSum(2,7)
// result:
// num1 => 2
// num2 => 7
// num3 => undefined
// 9