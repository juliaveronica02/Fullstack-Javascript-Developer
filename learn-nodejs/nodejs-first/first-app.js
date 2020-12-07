console.log("hello my name is Juve");
// run using code bellow on visual studio code terminal or linux terminal.
// node first-app.js 
// output: "hello my name is Juve".

const fs = require("fs")
// fs stand for file system.
fs.writeFileSync("Hello.txt", "Hello from nodejs")
// have two functional character.
// the first is file_name.txt.
// the second is the message from the file_name.txt when we open the txt file.
// this fs result can't be access on browser.