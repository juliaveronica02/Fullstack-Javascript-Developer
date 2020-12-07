# Project JavaScript Comparisons

- Create a new repo for the project: `project-javascript-comparisons`
- Create a `README.md` file to describe the project
- Structure, modify, or create the:
  - `index.html` HTML file
  - `index.js` JavaScript file
  - `.gitignore` file
  - `README.md` file
- Put some variety of data (`string`, `number`, `array`, `object`) inside variables. You can later `console.log` or `alert` the variable values.
  - Such as person name, person age, phone numbers, addresses, city names, country names, specification, etc
- Use comparison operators, such as `===`, `!==`, `>`, `>=`, etc
- Use conditional operators, such as `if else` and `switch case`
- Incrementally push your changes to GitHub, submit your project to GitHub, then finally deploy the project to the web live using Netlify
- **BE CREATIVE**

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript Comparisons</title>
  </head>
  <body>
    <h1>Project JavaScript Comparisons</h1>

    <script src="index.js"></script>
  </body>
</html>
```

**JavaScript**

```js
const nameA = 'Alpha'
const nameB = 'Beta'
const nameCompared = nameA === nameB

console.log(nameA)
console.log(nameB)
console.log(nameCompared)

// Feel free to have some experiments with comparisons
```

**JavaScript**

```js
const ageA = 18
const ageB = 25

if (ageA > ageB) {
  console.log('...')
} else if (ageA < ageB) {
  console.log('...')
} else {
  console.log('...')
}

// Feel free to have some experiments with comparisons
```

**JavaScript**

```js
const personA = {
  name: 'Alpha',
  age: 20
}

const personB = {
  name: 'Betty',
  age: 30
}

switch (personA.age > personB.age) {
  case true:
    console.log('...')
    break

  case false:
    console.log('...')
    break

  default:
    console.log('...')
}

// Feel free to have some experiments with comparisons
```
