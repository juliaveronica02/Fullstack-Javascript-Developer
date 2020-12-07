# Project Template

- Create a new repo for the project: `project-template`
- Create a `README.md` file to describe the project
- Structure, modify, or create the essential files
- Push changes to GitHub and submit your project

## `package.json`

```json
{
  "name": "project-nodejs",
  "version": "1.2.3",
  "description": "Project Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "keywords": ["project", "nodejs"],
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "chalk": "2.4.2"
  },
  "devDependencies": {
    "nodemon": "1.18.11"
  }
}
```

## `.gitignore`

```txt
node_modules
```

## Install npm package

```sh
npm install chalk
```

## JavaScript

```js
const chalk = require('chalk')

// -----------------------------------------------------------------------------

const name = 'Alpha Avalon'
console.log(chalk.red(name))

// -----------------------------------------------------------------------------

const info = chalk.keyword('blue')

const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']
names.forEach(name => {
  console.log(info(name))
})

// Feel free to have some experiments with JavaScript in Node.js
```
