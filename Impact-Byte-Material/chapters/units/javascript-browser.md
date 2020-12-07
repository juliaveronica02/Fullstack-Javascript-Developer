# JavaScript Browser

---

## `script` Tag

There 2 of ways of using JavaScript in the browser. You can:

- embed it to the HTML directly in `script` tag
- import from external file, i.e. `index.js`, through `script` tag with `src` attribute

### JavaScript Embedded inside HTML

```html
<!-- index.html -->
<script type="text/javascript">
  // JavaScript code here
  console.log('Hello JavaScript')
</script>
```

### JavaScript External File Imported into HTML

```html
<!-- index.html -->
<script src="./index.js"></script>
<!-- Notice that there is no code inside script tag -->
```

```js
// index.js
console.log('Hello JavaScript')
```

This way is the most recommended one.

---

## JavaScript Code Structure

### Statements

Usually statements are written on separate lines to make the code more readable.

```js
console.log('Hello')
console.log('World')
```

### Semicolons

A semicolon may be omitted in most cases when a line break exists.

```js
console.log('Hello')
console.log('World')
```

### Comments

```js
// This comment occupies a line of its own
console.log('Hello')

console.log('World') // This comment follows the statement

/*
 * An example with two messages.
 * This is a multiline comment.
 */
console.log('Hello')
console.log('World')
```

In most editors, a line of code can be commented out by pressing the `Ctrl + /` hotkey for a single-line comment and something like `Ctrl + Shift + /` – for multiline comments (select a piece of code and press the hotkey). For Mac, try `Cmd` instead of `Ctrl`.

---

## JavaScript Strict Mode

To make our JavaScript code withstand the time, you need to explicitly enable strict mode.

The directive looks like a string: `"use strict"` or `'use strict'`. When it is located at the top of a script, the whole script works the "modern" way.

```js
"use strict";

// this code works the modern way
...
```

For now, it’s enough to know about it in general:

- The `"use strict"` directive switches the engine to the “modern” mode, changing the behavior of some built-in features. We’ll see the details later in the tutorial.
- Strict mode is enabled by placing `"use strict"` at the top of a script or function. Several language features, like “classes” and “modules”, enable strict mode automatically.
- Strict mode is supported by all modern browsers.
- We recommended always starting scripts with `"use strict"`.

---

## JavaScript Browser References

- [Hello, world!](http://javascript.info/hello-world)
- [Code structure](http://javascript.info/structure)
- [The modern mode, "use strict"](http://javascript.info/strict-mode)
