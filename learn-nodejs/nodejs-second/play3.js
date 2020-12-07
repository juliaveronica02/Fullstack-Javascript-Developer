// var is a creates new variable.
// let is creates new variable, the scoping behaves a bit different.

const name = "Juve";
let age = 29;
const hasHobbies = true;

age = 30;
function summerizeUser(userName, userAge, userHasHobby) {
    return ("Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHasHobby)
}
console.log(summerizeUser(name,age,hasHobbies));
// run: node play3.js.
// output: Name is Juve, age is 30 and the user has hobbies: true.