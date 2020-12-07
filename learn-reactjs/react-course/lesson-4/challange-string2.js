// challange String 2.
// 1. create a var that stores the name that user enters via prompt.
var name = prompt("what is your name?");
// 2. capitalise the first letter of their name.
// a. isolate the first character (char).
var firstChar = name.slice(0, 1);
// b. turn the first char to upper case.
var upperCaseFirstChar = firstChar.toUpperCase();
// c. isolate the rest of the name.
var restOfName = name.slice(1, name.length);
// d. change the rest of the name to lower case.
restOfName = restOfName.toLowerCase();
// e. concactenate the first char with the rest of the char.
var capitaliseName = upperCaseFirstChar + restOfName;
// 3. use the capitalised version of their name to greet them using an alert.
alert("Hello, " + capitaliseName);