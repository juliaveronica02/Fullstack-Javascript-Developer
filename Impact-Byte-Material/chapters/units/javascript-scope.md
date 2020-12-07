# JavaScript Scope

In JavaScript there are two types of scope.

- Local scope
- Global scope

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.

## Local

Variables declared within a JavaScript block, become local to the block.

```js
// code here can NOT use name
{
  const name = 'Elon'
  // code here can use name
}
```

## Global

A variable declared outside a block, becomes global. A global variable has global scope. All scripts on a web page can access it.

```js
// code here can use name
const name = 'Elon'
{
  // code here can also use name
}
```

## JavaScript Scope References

- [The Visual Guide To JavaScript Variable Definitions & Scope](https://medium.freecodecamp.org/the-visual-guide-to-javascript-variable-definitions-scope-2717ad9f0169)
- [Understand JavaScript's this Keyword in Depth from @mariusschulz on @eggheadio](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth)
