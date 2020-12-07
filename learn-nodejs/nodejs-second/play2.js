const name = "juve"; //this is a string so must use ("").
const age = 20; // this is number no need ("").
const hasHobbies = true; //this is boolean have two types true and false.

// function.
function summerizeUser(userName, userAge, userHasHobby) {
    // return the data.
    return ("Name is " + userName + ", user age is " + userAge + " and the user has hobbies: " + userHasHobby);
}
// see the result on terminal.
console.log(summerizeUser(name, age, hasHobbies));
// run on visual studio code terminal: node play2.js.
// result: "Name is juve, user age is 20 and the user has hobbies: true".