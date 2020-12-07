var num1 = 10
// toString() number as input and returns a string.
console.log("String",num1.toString());
// result: String "10".

var num2 = 20.3
// toString() number as input and returns a string.
console.log("String 2", num2.toString());
// result: String 2 "20.3".

var stringNumber1 = "10";
// parseInt() string numeral as input and returns a number.
console.log("String To Number:",parseInt(stringNumber1));
// result: String To Number: 10.

var stringNumber2 = "11.5"
// parseInt() string numeral as input and returns a number.
console.log("String to Number 2:", parseInt(stringNumber2));
// result: String to Number 2: 11.
// why not 11.5?? because point five is a float and eleven is a number.

var floatNumber1 = "23.5"
// parseFloat() string numeral as input and returns a floating number.
console.log("Float:", parseFloat(floatNumber1));
// result: Float: 23.5.

var fixedNumber = 87.882749;
// toFixed() takes floating number and rounds it off to given position.
console.log("fixed:", fixedNumber.toFixed());
// result: fixed: 88.
console.log("fixed:", fixedNumber.toFixed(2));
// result: fixed: 87.88.

var fixedNumber2 = 87.324555;
// toFixed() takes floating number and rounds it off to given position.
console.log("fixed 2:", fixedNumber2.toFixed());
// result: fixed 2: 87.

// to view detail using google chrome.
// make html file and import javascript file (script src) and then press go live (live server).
// and inspect and open the console to see our console.log result.
// or if you want to see the result just from visual studio code just write node index.js.