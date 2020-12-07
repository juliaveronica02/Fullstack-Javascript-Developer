# Project JavaScript Boolean

- Create a new repo for the project: `project-javascript-boolean`
- Create a `README.md` file to describe the project
- Structure, modify, or create the:
  - `index.html` HTML file
  - `index.js` JavaScript file
  - `.gitignore` file
- Put a `script` tag to connect the HTML file with external JavaScript file.
- Put some variety of booleans (either `true` or `false`) inside `console.log()` statement or other `console` statements
- Try to put the booleans inside `alert()` statement
- Use variables combined with the booleans so they can be reused
  - Such as condition, toggle, available, etc
- Incrementally push your changes to GitHub, submit your project to GitHub, then finally deploy the project to the web live using Netlify

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript Boolean</title>
  </head>
  <body>
    <h1>Project JavaScript Boolean</h1>

    <script src="index.js"></script>
  </body>
</html>
```

**JavaScript**

```js
console.log(true)
console.log(false)
console.log(true, false)

const toggle = false

console.log(`The lamp's toggle is ${toggle}`)

alert(`The lamp's toggle is ${toggle}`)
```
