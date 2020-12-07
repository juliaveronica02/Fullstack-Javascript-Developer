// Variable.
const phi = 3.14

info = "internet positif"
console.log('berisi informasi developer');
console.log("Berisi Informasi Developer");
console.log(`Berisi informasi developer`);
console.log(`berisi informasi ${info}`);

// windows.alert to show notification.
window.alert("message: login success!");

// input using window.prompt.
const name = window.prompt("who are you?", "Developer");
console.log(`Hello, my name is ${name}!`);

// confirmation if the name true.
const correctName = window.confirm(`true ${name}?`)
debugger; // to see the execution code.
// condition.
if(correctName) {
    console.log("nice!");
}
else{
    console.log("if wrong, please re-write your name!");
}