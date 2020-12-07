# NodeJS Environment

Environment variables are a fundamental part of developing with Node.js, allowing your app to behave differently based on the environment you want them to run in. Wherever your app needs configuration, you use environment variables. And they’re so simple, they’re beautiful!

## Why and When ?

### Why

If you care about making your app run on any `computer` or `cloud` (aka your environments), then you should use them. Why? Because they externalize all environment specific aspects of your app and keep your app `encapsulated`. Now **_you can run your app anywhere by modifying the environment variables without changing your code and without rebuilding it!_**

### When

OK, so now you ask me when you should use them. In short, any place in your code that will change based on the environment. When you see these situations, use environment variables for anything you need to change or configure.
Here are some specific examples of common scenarios when you should consider using environment variables.

Which `HTTP` port to listen on
What path and folder your files are located in, that you want to serve
Pointing to a `development`, `staging`, `test`, or `production` database
Other examples might be `URLs` to server resources, `CDNs` for `testing` vs. `production`, and even a marker to label your app in the `UI` by the environment it lives in.
Let’s explore how you can use environment variables in `Node.js` code.

---

## process.env

You can create a simple folder and create `server.js`

```js
// learnEnv/server.js
console.log(`${process.env}`);
```

Yup, there are bunch key and value leads to your local environment live inside your local computer.

### Set environment in your project

There ara many ways to set up environment on your project.

Let start with `CLI`

```sh
PORT=9876 node server.js
```

or

```sh
PORT=9876 NODE_ENV=development node server.js
```

On your `package.json`

```json
{
  "scripts": {
    "start": "PORT=9876 NODE_ENV=development node index.js"
  }
}
```

### .env file

Once you define several of these, the next thought that may cross your mind is how you can manage them, so they don’t become a maintenance nightmare.

Imagine several of these for database connectivity and ports and keys. This doesn’t scale well when you type them all on one line. And there could be private information such as keys, usernames, passwords, and other secrets.

Running them from a command line is convenient, sure. But it has its drawbacks:

- there is no good place to see the list of variables
- it’s far too easy to make a typing mistake from the command line
- it’s not ideal to remember all of the variables and their values
  even with npm scripts, you still have to keep them current

A popular solution to how you can organize and maintain your environment variables is to use a `.env`file. I really like this technique as it makes it **super easy** to have one place where I can quickly read and modify them.
Create the `.env` file in the **_root of your app_** and add your variables and values to it.

```env
PORT=9876
NODE_ENV=development
SECRET=only_you_can_see_this
```

don't forget to always `.gitignore` `.env` file.

## Read the **_`.env`_** file

Right about now you’re probably thinking that something has to look for the `.env` file, and you’re right!

You could write your own code to find the file, parse it, and read them into your `Node.js` app. Or you could look to `npm` and find a convenient way to read the variables into your `Node.js` app in one fell swoop. You’d likely run across the `dotenv` package on `npm`, which is a recommend to use.

So first, you have to install `dotenv`

```sh
npm install dotenv

or

yarn add dotenv
```

On your `server.js` or any any file you want to use variables from `.env` file you have to put

```js
require("dotenv").config();
```

on the first line.

**NOTE**: Always put `require("dotenv").config();` on the top of your file

and you can find your environment variables very easy

```js
process.env.YOUR_ENV_VARIABLES_GOES_HERE;
```

You can also create your own config for your own environment variables

```js
// config/environmentVariables.js

require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  API_SECRET: process.env.API_SECRET
};
```

```js
// server.js

const { PORT, API_SECRET } = require("./config/environmentVariables.js");
console.log(PORT);
console.log(API_SECRET);
```

## References

- [dotenv | NPM](https://www.npmjs.com/package/dotenv)
- [John Papa | Medium](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)
