# npm Basic

## npm (Node Package Manager)

npm is distributed with Node.js, which means that when you download Node.js, you automatically get npm installed on your computer. npm is a package manager for Node.js packages, or modules if you like. npm itself is managed by a company called _npm, Inc_.

### npm Commands

```sh
# setup new node package.json
npm init
```

```sh
# install node package globally
npm install -g nodemon
```

```sh
# check package installed globally
npm list -g --depth=0
```

```sh
# setup new node package without any question
npm init -y
```

```sh
# install package and save to package dependency
npm install express
```

```sh
# install package and save to development package dependency
npm install nodemon --save-dev
```

```sh
# install package dependency on production mode
npm install --production
```

```sh
# Uninstall package dependency (change <package> with package name)
npm uninstall <package> 
npm uninstall <package> -g # uninstall global package
```

After `npm install` command, `npm` will create `node_modules` folder in your project, containing all the dependencies required. So, remember to ignore `node_modules` by adding it to the `.gitignore` file.

### `package.json`

The `npm init` command will generate `package.json`, this file holds various information relevant to the project. You will be asked a few questions to generate the initial information.

```json
{
  "name": "project-name",
  "version": "1.2.3",
  "description": "Project Name",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": ["project", "name"],
  "author": "Your Name",
  "license": "ISC"
}
```

```json
{
  "name": "project-name",
  "version": "1.2.3",
  "description": "Project Name",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo 'Error: no test specified' && exit 1",
    "dev": "nodemon index.js",
    "build": "echo build"
  },
  "keywords": ["project", "name"],
  "author": "Your Name",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.4",
    "dotenv": "^6.0.0",
    "express": "^4.16.3",
    "morgan": "^1.9.0",
    "mysql2": "^1.5.3",
    "sequelize": "^4.38.0"
  },
  "devDependencies": {
    "nodemon": "^2.8.4"
  }
}
```

### `dependencies`

The `dependencies` part contains all depen

### `package-lock.json`

The `package-lock.json` will automatically created when you install a/some package(s) using npm, to help you to ensure a consistent install and compatible version of dependencies.

### npm scripts

The `scripts` part is a collections of command list to run the project.

#### `npm start`

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

```sh
npm start
```

#### `npm test`

```json
{
  "scripts": {
    "start": "jest"
  }
}
```

```sh
npm test
```

#### `npm run dev`

```json
{
  "scripts": {
    "dev": "nodemon index.js"
  }
}
```

```sh
npm run dev
```

---

## Yarn (Yet Another RN?)

[Yarn](https://yarnpkg.com) is an alternative to npm. A fast, reliable, and secure dependency management. Yarn is commonly faster than npm. Think of it as an alias to `npm`, very similar, but created by community.

### Installation

**Ubuntu/Debian**

```sh
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
```

If using `nvm` you can avoid the `node` installation by doing:

```sh
sudo apt update && sudo apt install --no-install-recommends yarn
```

**macOS**

```sh
brew install yarn
```

Then you can use it like so:

```sh
yarn --version
# 1.19.1
```

### Yarn commands

```sh
# setup new package.json
yarn init
```

```sh
# install node package globally
yarn global add nodemon
```

```sh
# setup new node package without any question
yarn init -y
```

```sh
# install package and save to package dependency
yarn add express
```

```sh
# install package and save to development package dependency
yarn add --dev nodemon
```

```sh
# install package dependency on production mode
yarn --production
```

After `yarn install` or just `yarn` command, `npm` will create `node_modules` folder in your project, containing all the dependencies required. So, remember to ignore `node_modules` by adding it to the `.gitignore` file.

### `yarn.lock`

The `yarn.lock` will automatically created when you install a/some package(s) using Yarn, a counterfeit of npm's `package-lock.json`.

### Yarn scripts

The `scripts` part is a collections of command list to run the project.

#### `yarn start`

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

```sh
yarn start
```

#### `yarn test`

```json
{
  "scripts": {
    "start": "jest"
  }
}
```

```sh
yarn test
```

#### `yarn dev`

```json
{
  "scripts": {
    "dev": "nodemon index.js"
  }
}
```

```sh
yarn dev
```

---

## Glitch

[Glitch](https://glitch.com) is the friendly community where everyone can discover & create the best stuff on the web. The platform on which you can build Node.js applications in the cloud, public or private, and collaborate with other people on them.

---

## References

1. NPM Basic

- [npm](https://www.npmjs.com)
- [Yarn](https://yarnpkg.com)
  - [Yarn vs npm - which node package manager to use in 2018? | @RisingStack](https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers)
- [Glitch](https://glitch.com)
  - [Introduction to Glitch for Node.js Apps in the Cloud](https://blog.bitsrc.io/introduction-to-glitch-for-node-js-apps-in-the-cloud-cd263de5683f)

2. Cool NPM package

- [Chalk](https://www.npmjs.com/package/chalk)
- [Cowsay](https://www.npmjs.com/package/cowsay)
- [Pokemon](https://github.com/sindresorhus/pokemon)
- [Moment](https://momentjs.com/)
- [Yosay](https://www.npmjs.com/package/yosay)
