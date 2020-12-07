# Project JavaScript Object

- Create a new repo for the project: `project-javascript-object`
- Create a `README.md` file to describe the project
- Structure, modify, or create the:
  - `index.html` HTML file
  - `index.js` JavaScript file
  - `.gitignore` file
- Put a `script` tag to connect the HTML file with external JavaScript file.
- Put some variety of objects inside `console.log()` statement or other `console` statements
  - The data types inside the object could be string, number, boolean, or array
- Try to put the objects inside `alert()` statement
- Use variables combined with the objects so they can be reused
  - Such as human, animal, building, etc
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
