# Project JavaScript

- The main objective is to experiment with JavaScript first, later we will program a real and actual application
- Create a new repo for the project: `project-javascript-data-types`
- Create a `README.md` file to describe the project
- In the starting JavaScript projects, you don't have to design a mockup
- Structure, modify, or create the:
  - `index.html` HTML file
  - `index.css` CSS file if needed (optional)
  - `index.js` JavaScript file
  - `.gitignore` file
  - `README.md` file to explain this project
- Put a `script` tag to connect the HTML file with external JavaScript file.
- Put a `console.log('Hello World')` statement or other `console` statements to log out the text in the Console panel.
  - See if the Console panel shows the result.
- Try to put `alert('Hello World')` statement to alert the text in the browser.
  - See if the browser shows the result in the pop up.
- Incrementally push your changes to GitHub, submit your project to GitHub, then finally deploy the project to the web live using Netlify

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript Data Types (Various)</title>
  </head>
  <body>
    <h1>Project JavaScript Data Types (Various)</h1>

    <script src="index.js"></script>
  </body>
</html>
```

**JavaScript**

```js
console.log('Hello World')
console.warn('Hello Warning')
console.error('Hello Error')
console.info('Hello Info')

alert('Hello Alert')
```

```js
// STRING
console.log('Hello World')

const name = 'Brendan Eich'

console.log(`Hello ${name}`)

alert(`Hello ${name}`)
```

```js
// NUMBER
console.log(0)
console.log(100)
console.log(3.14)

const age = 52

console.log(`His age is ${age}`)

alert(`His age is ${age}`)
```

```js
// OBJECT
console.log({ name: 'Alpha', age: 100, superPower: true })
console.log({
  name: 'Alpha',
  age: 100,
  superPower: true
})

const hero = { name: 'Alpha', age: 100, superPower: true }

console.log(hero)
console.log(hero['name'])
console.log(hero.age)
console.log(hero.superPower)

alert(hero)
alert(hero['name'])
alert(hero.age)
alert(hero.superPower)
```

```js
// ARRAY
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

```js
// BOOLEAN
console.log(true)
console.log(false)
console.log(true, false)

const toggle = false

console.log(`The lamp's toggle is ${toggle}`)

alert(`The lamp's toggle is ${toggle}`)
```


