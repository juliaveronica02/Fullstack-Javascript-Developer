# Project JavaScript Calculator Console

- Create a new repo for the project: `project-javascript-calculator-console`
- Create a `README.md` file to describe the project
- Structure, modify, or create the:
  - `index.html` HTML file
  - `index.js` JavaScript file
  - `.gitignore` file
  - `README.md` file
- Use multiple variables to contain numbers
- Operate those variables with variety of mathematical operators.
- Incrementally push your changes to GitHub, submit your project to GitHub, then finally deploy the project to the web live using Netlify
- **BE CREATIVE**

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript Calculator Console</title>
  </head>
  <body>
    <h1>Project JavaScript Calculator Console</h1>

    <script src="index.js"></script>
  </body>
</html>
```

**JavaScript**

```js
const digitA = 100
const digitB = 200.5

const resultAddition = digitA + digitB
const resultSubstraction = digitA - digitB
const resultMultiplication = digitA * digitB
const resultDivison = digitA / digitB

console.log(digitA)
console.log(digitB)

console.log(resultAddition)
console.log(resultSubstraction)
console.log(resultMultiplication)
console.log(resultDivison)

// Feel free to have some experiments with variety of operators
// You can also using window.prompt (remember prompt value is string, so you have to parse the value to number using parseInt() or Number())
```
