# JavaScript `this`

`this` is a value that has different values depending on where it’s used.

---

## `this` in strict mode

Outside any object, `this` in strict mode is always `undefined`.

If strict mode is disabled (the default state if you don’t explicitly add `'use strict'` on top of your file ), you are in the so-called sloppy mode, and `this` - unless some specific cases mentioned here below - has the value of the global object.

Which means `this` will be the `window` in a browser context.

---

## `this` in methods

A method is a function attached to an object.

You can see it in various forms.

```js
const car = {
  maker: 'Ford',
  model: 'Fiesta',

  drive() {
    console.log(`Driving a ${this.maker} ${this.model} car!`)
  }
}

car.drive() // Driving a Ford Fiesta car!
```

In this case, using a regular function, `this` is automatically bound to the object.

Note that the above method declaration is the same as `drive: function() {…`, but shorter:

```js
const car = {
  maker: 'Ford',
  model: 'Fiesta',

  drive: function() {
    console.log(`Driving a ${this.maker} ${this.model} car!`)
  }
}
```

```js
const car = {
  maker: 'Ford',
  model: 'Fiesta'
}

car.drive = function() {
  console.log(`Driving a ${this.maker} ${this.model} car!`)
}

car.drive() // Driving a Ford Fiesta car!
```

An arrow function does not work in the same way, as it’s lexically bound:

```js
const car = {
  maker: 'Ford',
  model: 'Fiesta',

  drive: () => {
    console.log(`Driving a ${this.maker} ${this.model} car!`)
  }
}

car.drive() // Driving a undefined undefined car!
```

---

## Binding arrow functions

You cannot bind a value to an arrow function, like you do with normal functions.

It’s not possible due to the way they work. this is **lexically bound**, which means its value is derived from the context where they are defined.

---

## Explicitly pass an object to be used as this

JavaScript offers a few ways to map this to any object you want.

Using `bind()`, at the **function declaration** step:

```js
const car = {
  maker: 'Ford',
  model: 'Fiesta'
}

const drive = function() {
  console.log(`Driving a ${this.maker} ${this.model} car!`)
}.bind(car)

drive() // Driving a Ford Fiesta car!
```

You could also bind an existing object method to remap its this value:

```js
const car = {
  maker: 'Ford',
  model: 'Fiesta',

  drive() {
    console.log(`Driving a ${this.maker} ${this.model} car!`)
  }
}

const anotherCar = {
  maker: 'Audi',
  model: 'A4'
}

car.drive.bind(anotherCar)() // Driving a Audi A4 car!
```

Using `call()` or `apply()`, at the `function invocation` (when the function is called) step:

```js
const car = {
  maker: 'Ford',
  model: 'Fiesta'
}

const drive = function(kmh) {
  console.log(`Driving a ${this.maker} ${this.model} car at ${kmh} km/h!`)
}

drive.call(car, 100) // Driving a Ford Fiesta car at 100 km/h!

drive.apply(car, [100]) // Driving a Ford Fiesta car at 100 km/h!
```

The first parameter you pass to `call()` or `apply()` is always bound to `this`. The difference between `call()` and `apply()` is just that the second one wants an array as the arguments list, while the first accepts a variable number of parameters, which passes as function arguments.

---

## JavaScript `this` References

- [this - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [this in JavaScript](https://flaviocopes.com/javascript-this)
- [Object methods, `this`](http://javascript.info/object-methods)
- [JavaScript — all about `this` keyword – codeburst](https://codeburst.io/all-about-this-and-new-keywords-in-javascript-38039f71780c)
- [Understanding the `this` Keyword in JavaScript – Quick Code – Medium](https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
