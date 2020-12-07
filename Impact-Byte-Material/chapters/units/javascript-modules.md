# JavaScript Modules

---

## Modules

As our application grows bigger, we want to split it into multiple files, so called _modules_.
A module usually contains a class or a library of useful functions.

For a long time, Javascript existed without a language-level module syntax.
That was not a problem, because initially scripts were small and simple.
So there was no need.

But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules.

For instance:

- [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition) is one of the most ancient module systems, initially implemented by the library [RequireJS](http://requirejs.org).
- [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) is the module system created for Node.JS server.
- [UMD](https://github.com/umdjs/umd) is one more module system, suggested as a universal one, compatible with AMD and CommonJS.

Now all these slowly become a part of history, but we still can find them in old scripts.
The language-level module system appeared in the standard in 2015, gradually evolved since then, and is now supported by all major browsers and in Node.js.

A module itself is just a file `index.js` or a single script `<script>`, as simple as that.

Directives keyword `export` and `import` allow to interchange functionality between modules:

- `export` keyword labels variables and functions that should be accessible from outside the file.
- `import` allows to import functionality from other modules.

So after a module is being exported, the module can be imported in another file.

For instance, if we have a file `hello.js` exporting a function and another method:

```js
// 📁 hello.js
export function sayHello(user) {
  console.log(`Hello, ${user}!`);
}

// export an array
export let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

Then another file may import and use it:

```js
// 📁 index.js
import { sayHello } from "./hello.js";

sayHello("Alpha"); // Hello, Alpha!

//or
import { months } from "./hello.js";

console.log(months);

//or
import { MODULES_BECAME_STANDARD_YEAR } from "./hello.js";

console.log(MODULES_BECAME_STANDARD_YEAR);

//or
import { User } from "./hello.js";

const firstUser = new User("Impact Byte");
console.log(firstUser);
```

To use modules in the browser, we must set the attribute `<script type="module">`:

```html
<script type="module">
  import { sayHello } from "./hello.js";

  document.body.innerHTML = sayHello("Alpha");
</script>

<!-- or  -->

<script type="module" src="./hello.js"></script>
```

The browser automatically fetches and evaluates imports, then runs the script.

_Note_: Many browsers do not allow you to access files on the local filesystem with JavaScript (even if the HTML document is also on the local filesystem).

So if you want test JavaScript Module please use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) instead.

---

Also, we can put export separately.

Here we first declare, and then export:

```js
// 📁 hello.js
function sayHello(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayHello, sayBye }; // a list of exported variables
```

and then in import file

```js
// 📁 index.js
import { sayHello, sayBye } from "./hello.js";

sayHello("Impact Byte"); // Hello, John!
sayBye("Impact Byte"); // Bye, John!
```

But if the list is long, we can import everything as an object using import \* as <obj>, for instance:

```js
// 📁 hello.js
import * as say from "./say.js";

say.sayHi("John");
say.sayBye("John");
```

We can also use as to import/export under different names.

```js
// 📁 hello.js
...
export {sayHello as hello, sayBye as bye}

//or

// 📁 index.js
import { sayHello as hello, sayBye as bye } from './hello.js';

hello('John');
bye('John');
```

## Export Default

So far, we’ve seen how to import/export multiple things, optionally “as” other names.
Modules provide special `export default` syntax to make “one thing per module” way look better.

It requires following export and import statements:

- Put export default before the “main export” of the module.
- Call import without curly braces.

```js
// 📁 user.js
export default class User {
  // just add "default"
  constructor(name) {
    this.name = name;
  }
}
```

```js
// 📁 index.js
import User from "./user.js"; // not {User}, just User

new User("John");
```
This also applies to other methods

Imports without curly braces look nicer. A common mistake when starting to use modules is to forget curly braces at all. So, remember, import needs curly braces for named imports and doesn’t need them for the default one.

We may have both default and named exports in a single module, but in practice people usually don’t mix them. A module has either named exports or the default one.

**Another thing to note is that named exports must (naturally) have a name, while export default may be anonymous.**

## Modules Features

What is different in modules, compared to "regular" scripts?

Modules are core features, valid both for browser and server-side Javascript.

- A module always has `"use strict"` automatically.
- A module-level scope is created which each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.
- A module code is evaluated only the first time when imported. So we only need to `import` it once.
- Top-level `this` (commonly as `window`) is `undefined`.

---

## JavaScript Modules References

- [Modules, introduction](http://javascript.info/modules-intro)
- [Export and Import](http://javascript.info/import-export)
- [Dynamic imports](http://javascript.info/modules-dynamic-imports)
- [What is AMD, CommonJS, and UMD?](https://www.davidbcalhoun.com/2014/what-is-amd-commonjs-and-umd)
- [The state of JavaScript modules – webpack – Medium](https://medium.com/webpack/the-state-of-javascript-modules-4636d1774358)
- [JavaScript Module Systems Showdown: CommonJS vs AMD vs ES2015](https://auth0.com/blog/javascript-module-systems-showdown)
