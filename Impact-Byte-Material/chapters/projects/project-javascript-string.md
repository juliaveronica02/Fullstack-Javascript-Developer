# Project JavaScript String

- Create a new repo for the project: `project-javascript-string`
- Create a `README.md` file to describe the project
- Structure, modify, or create the:
  - `index.html` HTML file
  - `index.js` JavaScript file
  - `.gitignore` file
- Put a `script` tag to connect the HTML file with external JavaScript file.
- Put some variety of strings inside `console.log()` statement or other `console` statements
- Try to put the strings inside `alert()` statement
- Use either single quote (`'`), double quote (`"`), or backtick quote (```)
- Use variables combined with the strings so they can be reused
  - Such as person names, phone numbers, addresses, city names, country names, etc
- Incrementally push your changes to GitHub, submit your project to GitHub, then finally deploy the project to the web live using Netlify

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Project JavaScript String</title>
  </head>
  <body>
    <h1>Project JavaScript String</h1>

    <script src="index.js"></script>
  </body>
</html>
```

**JavaScript**

```js
console.log('Hello World')

const name = 'Brendan Eich'

console.log(`Hello ${name}`)

alert(`Hello ${name}`)
```
