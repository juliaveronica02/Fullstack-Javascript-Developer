# Babel.js

`Babel` is a `JavaScript` compiler.

`Babel` is a toolchain that is mainly used to convert `ECMAScript 2015+` code into a backwards compatible version of `JavaScript` in current and older browsers or environments. Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through @babel/polyfill)
- Source code transformations (codemods)
- And more!

> BabelJS is a `JavaScript` transpiler which transpiles new features into old standard. With this, the features can be run on both old and new browsers.

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map(n => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

### What is Babel-Transpiler?

`Babel-transpiler` converts the syntax of modern `JavaScript` into a form, which can be easily understood by older browsers. For example, arrow function, const, let classes will be converted to function, var, etc. Here the syntax, i.e., the arrow function is converted to a normal function keeping the functionality same in both the cases.

### What is Babel-polyfill?

There are new features added in `JavaScript` like promises, maps and includes. The features can be used on array; the same, when used and transpiled using babel will not get converted. In case the new feature is a method or object, we need to use Babel-polyfill along with transpiling to make it work on older browsers.

Here is the list of ECMA Script features available in `JavaScript`, which can be transpiled and polyfilled −

- `Classes`
- `Decorators`
- `Const`
- `Modules`
- `Destructing`
- `Default parameters`
- `Computed property names`
- `Object rest/spread`
- `Async functions`
- `Arrow functions`
- `Rest parameters`
- `Spread`
- `Template Literals`

ECMA Script features that can be polyfilled −

- `Promises`
- `Map`
- `Set`
- `Symbol`
- `Weakmap`
- `Weakset`
- `includes`
- `Array.from, Array.of,Array#find,Array.buffer, Array#findIndex`
- `Object.assign,Object.entries,Object.values`

---

## Tools

All the Babel modules you'll need are published as separate npm packages scoped under `@babel` (since version 7). This modular design allows for various tools each designed for a specific use case. Here we'll look at`@babel/core` and `@babel/cli`.

- `@babel/core`

  Just like what its name has suggested, is the core of the entire Babel program.

  As an end-user though, you'll probably want to install other tools that serve as an interface to @babel/core and integrate well with your development process. Even so, you might still want to check its documentation page to learn about the options, most of which can be set from the other tools as well.

- `@babel/cli`

  Is the command line interface. We use it to communicate with babel.
  Here's the installation command and a basic usage example:

  ```sh
  ./node_modules/.bin/babel src --out-dir lib
  ```

  This will parse all the JavaScript files in the src directory, apply any transformations we have told it to, and output each file to the lib directory. Since we haven't told it to apply any transformations yet, the output code will be identical to the input (exact code styling is not preserved). We can specify what transformations we want by passing them as options.

  We used the --out-dir option above. You can view the rest of the options accepted by the cli tool by running it with --help. But the most important to us right now are --plugins and --presets.

## `@Babel/Polyfill`

Babel/polyfill is for adding ES6+ features into ES5. So why do we need to do that?

New syntax is not the only difference between ES6 and ES5. ES6 has already received many new APIs. API is just a fancy name for built-in objects. These new built-in objects are very useful but the problem is they do not exist in the ES5 environment.
The only solution is to add these built-in objects into the ES5 environment. This is what polyfill is for.

---

## Plugins & Presets

### Plugins

Babel is a compiler (source code => output code). Like many other compilers it runs in `3 stages: parsing, transforming, and printing.`

Now, out of the box Babel doesn't do anything. It basically acts like const `babel = code => code`; by parsing the code and then generating the same code back out again. You will need to add plugins for Babel to do anything.

It requires plugins to tell it how. There are many plugins. Installing and setting them one by one is a labor-intensive job.

- [List Plugin](https://babeljs.io/docs/en/next/plugins)

For instance:

```sh
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

Now any arrow functions in our code will be transformed into ES5 compatible function expressions:

```sh
const fn = () => 1;

// converted to

var fn = function fn() {
return 1;
};
```

### Presets

Transformations come in the form of plugins, which are small JavaScript programs that instruct Babel on how to carry out transformations to the code. You can even write your own plugins to apply any transformations you want to your code. To transform ES2015+ syntax into ES5 we can rely on official plugins like @babel/plugin-transform-arrow-functions.

That's a good start! But we also have other ES2015+ features in our code that we want transformed. Instead of adding all the plugins we want one by one, we can use a "preset" which is just a pre-determined set of plugins.

Just like with plugins, you can create your own presets too to share any combination of plugins you need. For our use case here, there's an excellent preset named env.

```sh
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
```

---

## Configuration

Before we can use Babel, we need to configure it. The best way to do it is to create a file to store Babel configuration information.

In Babel 6, we store configuration information in `.babelrc` or `package.json`.
Babel 7 offers us a new solution: `babel.config.js`.
The Babel manual has offers us a template for creating `babel.config.js`. We just need to copy it into our project root folder.

```js
// babel.config.js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      }
    }
  ]
];

module.exports = { presets };

// or

module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

And now in your `package.json` just add:

```js
{
  // ...
  "scripts": {
    "build": "./node_modules/.bin/babel src --out-dir lib" // npx babel src --out-dir lib
  },
 // ...
}

```

---

## Usage

There are quite a few tools in the Babel toolchain that try to make it easy for you to use Babel whether you're an "end-user" or building an integration of Babel itself. This will be a quick introduction to those tools and you can read more about them in the "Usage" section of the docs.

1. Running these commands to install the packages:

```sh
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```

2. Creating a config file named `babel.config.js` in the root of your project with this content:

   ```sh
   const presets = [
     [
       "@babel/env",
       {
         targets: {
           edge: "17",
           firefox: "60",
           chrome: "67",
           safari: "11.1",
         },
         useBuiltIns: "usage",
       },
     ],
   ];

   module.exports = { presets };
   ```

3. And running this command to compile all your code from the src directory to lib:

   ```sh
   npx babel src --out-dir lib
   ```

---

## References

- [Kangax](https://kangax.github.io/compat-table/esintl/)
- [Babel | Usage](https://babeljs.io/docs/en/next/usage)
