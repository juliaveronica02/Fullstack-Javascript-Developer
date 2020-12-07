# Project JavaScript Array

- Create a new repo for the project: `project-javascript-array`
- Create a `README.md` file to describe the project
- Structure, modify, or create the:
  - `index.html` HTML file
  - `index.js` JavaScript file
  - `.gitignore` file
- Put a `script` tag to connect the HTML file with external JavaScript file.
- Put some variety of arrays inside `console.log()` statement or other `console` statements
  - The data types inside the array could be string, number, or boolean
- Try to put the arrays inside `alert()` statement
- Use variables combined with the arrays so they can be reused
  - Such as texts, numbers, conditions, people, contacts, etc
- Incrementally push your changes to GitHub, submit your project to GitHub, then finally deploy the project to the web live using Netlify

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript Array</title>
  </head>
  <body>
    <h1>Project JavaScript Array</h1>

    <script src="index.js"></script>
  </body>
</html>
```

**JavaScript**

```js
console.log([1, 2, 3])
console.log([0, 1, 2, 3])
console.log(['Alpha', 100, true])

const person = ['Alpha', 100, true]

console.log(person)
console.log(person[0])
console.log(person[1])
console.log(person[2])

alert(person)
alert(person[0])
alert(person[1])
alert(person[2])
```
