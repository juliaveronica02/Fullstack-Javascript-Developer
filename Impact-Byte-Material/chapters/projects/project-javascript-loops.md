# Project JavaScript Loops

- Create a new repo for the project: `project-javascript-loops`
- Create a `README.md` file to describe the project
- Structure, modify, or create the:
  - `index.html` HTML file
  - `index.js` JavaScript file
  - `.gitignore` file
  - `README.md` file
- Put some variety of data (`string`, `number`, `array`, `object`) inside variables. You can later `console.log` or `alert` the variable values.
  - Such as people names, array of numbers, phone numbers, addresses, city names, country names, etc
- Use loop statements, such as `do {} while ()` or `for ()`
- You can also use comparison operators, such as `>`, `<`, `===`, `!==`
- You can also use conditional statements, such as `if else` and `switch case`
- Incrementally push your changes to GitHub, submit your project to GitHub, then finally deploy the project to the web live using Netlify
- **BE CREATIVE**

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript Loops</title>
  </head>
  <body>
    <h1>Project JavaScript Loops</h1>

    <script src="index.js"></script>
  </body>
</html>
```

**JavaScript**

```js
let iteration = 1

do {
  console.log(iteration)
  iteration += 5
} while (iteration < 100)

// Feel free to have some experiments with comparisons
```

**JavaScript**

```js
for (let index = 0; index <= 100; index += 10) {
  console.log(index)
}

// Feel free to have some experiments with comparisons
```

**JavaScript**

```js
const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index]
  console.log(element)
}

// Feel free to have some experiments with comparisons
```

## Challenge

Hey! if you find this too easy try to _**hack**_ this out

_Factorial Number_
```
Input:4
Output:24


Input:8
Output:40320 
```

For example: if variable num = 4, then your program should return (4 * 3 * 2 * 1) = 24 in new variable.

`var factorialNumber = 24`

---

_Reverse Name_
```
Input: "yourName"
Output: "emaNruoy"
```
For example: if variable yourName = "haekal", then your program should return "lakeah" in new variable.

`var reverseName = "lakeah"`

`console.log` the answer!

**Happy hacking!**
