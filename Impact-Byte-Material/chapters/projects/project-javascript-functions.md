# Project JavaScript Functions

- Create a new repo for the project: `project-javascript-functions`
- Create a `README.md` file to describe the project
- Structure, modify, create, and fill the HTML file, JavaScript file, and a `.gitignore`
- It's recommended to create multiple pages for each particular functions. So we can test those functions better.
- Use multiple variables to contain variety of data types (string, number, boolean, array, object).
- Create multiple functions to operator on those variables.
  - You can log or alert those data
  - You can operate those data and then return a new data
- Implement multiple ways of declaring a function
  - `function` declaration
  - `function` in a variable
  - arrow function `() => {}` in a variable
- Incrementally push your changes to GitHub, submit your project to GitHub, then finally deploy the project to the web live using Netlify

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript Functions</title>
  </head>
  <body>
    <h1>Project JavaScript Functions</h1>

    <script src="index.js"></script>
  </body>
</html>
```

**JavaScript**

```js
function logName(name) {
  console.log(`Hello, ${name}!`)
}

const nameA = 'Alpha'
const nameB = 'Betty'

logName(nameA)
logName(nameB)

// Feel free to have some experiments with functions
```

**JavaScript**

```js
const checkAge = function(age) {
  if (age >= 18) {
    console.log('You are old enough')
  } else if (age < 18 && age >= 0) {
    console.log('You are still young')
  } else {
    console.log('You are not born yet')
  }
}

checkAge(10) // You are still young
checkAge(25) // You are old enough
checkAge(-2) // You are not born yet

// Feel free to have some experiments with function declarations
```

**JavaScript**

```js
const addMarks = (text, mark, times) => {
  let newText = text

  for (let i = 0; i <= times; i++) {
    newText += mark
  }

  console.log(newText)
}

addMarks('Hello', '!', 1) // Hello!
addMarks('Hello', '!', 3) // Hello!!!
addMarks('How are you', '?', 1) // How are you?
addMarks('How are you', '?', 2) // How are you??

// Feel free to have some experiments with arrow functions
```

**JavaScript**

```js
const showNameWithAge = (name = 'Unknown', age = 0) => {
  const nameWithAge = `${name} is ${age} year(s) old`

  return nameWithAge // return the value to be used later
}

const alpha = showNameWithAge('Alpha', 11)
const betty = showNameWithAge('Betty', 42)
const gamma = showNameWithAge('Gamma', 30)

console.log(alpha)
console.log(betty)
console.log(gamma)

// Feel free to have some experiments with default parameters
```
