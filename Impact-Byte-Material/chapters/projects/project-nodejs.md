# Project Node.js

- Create a new repo for the project: `project-nodejs`
- Structure, modify, or create the essential files
- We will use `yarn` instead of `npm` so it is faster.
- Push changes to GitHub and submit your project

## Directory Tree

```
.
├── index.js
├── .gitignore
├── node_modules
├── package.json
└── yarn.lock
```

## `package.json`

```json
{
  "name": "project-nodejs",
  "version": "1.2.3",
  "description": "Project Node.js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
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

## Install package

```sh
yarn add chalk
```

## JavaScript

```js
const chalk = require('chalk')

// ---

const name = 'Zero Megaman'
console.log(chalk.red(name))

// ---

const info = chalk.keyword('blue')

const names = ['Alpha Avalon', 'Betty Brave', 'Gamma Gacurio']
names.forEach(name => {
  console.log(info(name))
})

// Feel free to have some experiments with JavaScript in Node.js
```

## Run

```sh
$ npm start

> project-nodejs@1.2.3 start /Users/yourname/project-nodejs
> node index.js

Zero Megaman
Alpha Avalon
Betty Brave
Gamma Gacurio
```

```sh
$ yarn start
yarn run v1.9.4
$ node index.js
Zero Megaman
Alpha Avalon
Betty Brave
Gamma Gacurio
✨ Done in 0.20s.
```
