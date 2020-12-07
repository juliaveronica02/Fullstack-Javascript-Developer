var myString = "This is a string for Javascript string function"
// return the length of the string.
console.log("length:", myString.length);
// result: length: 33.

// find index of a string inside another string.
console.log("find:", myString.indexOf('Javascript'));
// result: find: 21.
console.log("find 2:", myString.indexOf('This'));
// result: find 2: 0.
var mySecondString = "This is a string for Javascript string function"
console.log("find second:", mySecondString.indexOf("JavaScript"));
// result: find second: -1. because different type character.

// find last index of a string inside another string.
console.log("last 1:", myString.lastIndexOf('Javascript'));
// result: last 1: 21.

// get a part of our string slice(start, end).
console.log("1", myString.slice(0,6));
// result: 1 This i.
console.log("2", myString.slice(0,4));
// result: 2 This.
console.log("3", myString.slice(21,31));
// result: 3 Javascript.
console.log("4", myString.slice(-10));
// result: 4 g function.
console.log("5", myString.slice(5));
// result: 5 is a string for Javascript string function.

// get sub string function - substr(startPos, length).
console.log("sub string", myString.substr(0,4));
// result: sub string This.
console.log("sub string", myString.substr(21,10));
//  result: sub string Javascript.
console.log("sub string 2", myString.substr(21));
// result: sub string 2 Javascript string function.

var exampleTutorial = "This is Javascript basic learning"
// toUpperCase() - it converts our string into uppercase characters.
console.log("capital:", exampleTutorial.toUpperCase());
// result: capital: THIS IS JAVASCRIPT BASIC LEARNING.
// toLowerCase() - it converts our string into lowercase characters.
console.log("lower:", exampleTutorial.toLowerCase());
// result: lower: this is javascript basic learning.

var firstName = "juve"
var lastName = "oke"
// concat() it merges two or more strings.
console.log("concat:",exampleTutorial.concat(firstName));
//  result: concat: This is Javascript basic learning juve.
// concat() it merges two or more strings.
console.log("concat:",exampleTutorial.concat(" ",firstName, " ",lastName));
// " " - make a space.
// result: concat: This is Javascript basic learning juve oke.

// we can also use "+" to concat two or more strings.
console.log("plus:", firstName  + " " + lastName + " " + exampleTutorial);
// result: plus: juve oke This is Javascript basic learning.

// trim() - it removes extra spaces
var trimSpace = "     myString     "
console.log("trim:", trimSpace.trim());
// result: trim: myString.

var trimSpace2 = " my string "
// trim() - it removes extra spaces
console.log("trim2:", trimSpace2.trim());
// result: trim2: my string.

var charAtExample = "This is my test string"
// charAt() this take a position as an arg and returns the character as that position.
console.log("char", charAtExample.charAt(5));
// result: char i.
console.log("char2", charAtExample.charAt(10));
// result: char " ". we got a space.
console.log("char3", charAtExample.charAt(11));
// result: char3 t.

// split() splits our string on the basis of the arguments passed.
var sampleString = "This is my example string using split"
console.log("example", sampleString.split());
// result: example [ 'This is my example string using split' ].

// run: node index.js.