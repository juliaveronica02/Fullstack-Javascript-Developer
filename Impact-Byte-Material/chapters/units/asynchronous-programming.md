# Asynchronous Programming

---

## Synchronous vs Asynchronous

In a **synchronous** programming model, things happen one at a time. When you call a function that performs a long-running action, it returns only when the action has finished and it can return the result. This stops (blocking) your program input/output (I/O) for the time the action takes.

An **asynchronous** model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result. So you program can still run without waiting the previous action to finish (non-blocking I/O).

In other term, asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure, or progress.

For example, most PHP programs are synchronous, while most Node.js programs are asynchronous.

![](images/php-vs-nodejs.jpg)

---

## Asynchronous Operations

Operations in JavaScript are traditionally synchronous and execute from top to bottom. For instance, some operations that logs the processes to the console:

```js
console.log('Wake up')
console.log('Take a bath')
console.log('Run a jog')
```

```txt
Wake up
Take a bath
Run a jog
```

If we try to delay one of them:

```js
console.log('Wake up')

setTimeout(function() {
  console.log('Take a bath')
}, 3000)

console.log('Run a jog')
```

```txt
Wake up
Run a jog
Take a bath // after 3 seconds
```

The `setTimeout` function makes the operation asynchronous by deferring (holding up) one of the operation to occur after 3 seconds.

So the middle operation still show up later, but not blocking the next operation.

This is what we previously called non-blocking I/O.

That is why still we have the control to arrange whether the flow would be synchonous or asynchronous in JavaScript and Node.js programs.

---

## Callback Function

Most of the time we want to refactor the function to have flexibility over how the functions are run through. Because we want to make sure that a certain operation would run exactly after something else before.

```js
const insertName = () => {
  // the variable declaration is obviously be run
  // after the function is being run
  const name = 'Alpha'
  console.log(`My name is ${name}`)
}

insertName()
```

In JavaScript, we already know that we can pass a function as an argument to another function. Then the argument function can do a action as a callback function, sometimes called `callback` or `cb`.

Here, the `callback` is an anonymous function that passed into `insertName`.

```js
const insertName = callback => {
  const name = 'Alpha'
  callback(name)
}

insertName(name => {
  console.log(`My name is ${name}`)
})
```

While here, the named `callback` would be `logName` that passed into `insertName`.

```js
const logName = name => {
  console.log(`My name is ${name}`)
}

const insertName = callback => {
  const name = 'Alpha'
  callback(name)
}

insertName(logName)
```

We can arrange how the functions are stitched together.

```js
const logName = name => console.log(`My name is ${name}`)
const alertName = name => alert(`My name is ${name}!`)

const insertName = (name, callback) => callback(name)

insertName('Alpha', logName)
insertName('Betty', alertName)
insertName('Gamma', logName)
```

---

## Promise

Promise is an alternative way of using callback, so we can avoid the syntax going become like this, the _callback hell_:

**DO NOT DO THIS**

```js
const verifyUser = (username, password, callback) => {
  dataBase.verifyUser(username, password, (error, userInfo) => {
    if (error) {
      callback(error)
    } else {
      dataBase.getRoles(username, (error, roles) => {
        if (error) {
          callback(error)
        } else {
          dataBase.logAccess(username, error => {
            if (error) {
              callback(error)
            } else {
              callback(null, userInfo, roles)
            }
          })
        }
      })
    }
  })
}
```

A promise has 3 states:

1. `pending`: initial state, neither fulfilled nor rejected.
2. `fulfilled`: meaning that the operation has been completed successfully.
3. `rejected`: meaning that the operation has been failed.

We can create new promise using `Promise` built in object. If the promise is fulfilled, use `resolve()` to pass your result value. If the promise is rejected, use `reject()` to pass your error value.

```js
const newPromise = new Promise((resolve, reject) => {
  // use resolve if promise is fulfilled
  resolve('Fulfilled')

  // use reject is promise is rejected
  reject('Rejection')
})
```

In a real case, the resolve and reject would be conditioned:

```js
const newPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Fulfilled')
  } else {
    reject('Rejection')
  }
})
```

Here, `Promise` itself accepts an anynomous callback function as the parameter of the `Promise` object constructor.

After a Promise is fulfilled by `resolve()` or rejected by `reject()`, the result or error value will be handled by `.then` or `.catch`.

We can run the Promise like so:

```js
newPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error(error)
  })
```

```txt
Fulfilled
```

Sometimes we can use more than single `.then`.

```js
newPromise
  .then(resultFirst => {
    return resultFirst + '!'
  })
  .then(resultSecond => {
    console.log(resultSecond + '?')
  })
  .catch(error => {
    console.error(error)
  })
```

```txt
Fulfilled!?
```

Also make it shorter:

```js
newPromise
  .then(resultFirst => resultFirst + '!')
  .then(resultSecond => console.log(resultSecond + '?'))
  .catch(error => console.error(error))
```

```txt
Fulfilled!?
```

In a Promise, we can use built-in `Error` object because `.catch` will automatically catch the `error` from `reject`.

```js
// try to change the condition to either true or false
const condition = false

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Fulfilled from myPromise!')
  } else {
    reject(new Error('Rejected from myPromise!'))
  }
})

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error.message))
```

```txt
Rejected from myPromise!
```

---

# Async Await (`async`/`await`)

## Async

Async is a modification of `Promise` syntax, you can write `Promise` easier with `async` syntax.

The return value of an `async` function is recognized as a Promise's `resolve()`.

```js
// the async keyword is in the front
async function myAsyncFunction() {
  return 'Fulfilled'
}
```

Or using arrow function:

```js
// the async keyword is before the parameter
const myAsyncFunction = async () => {
  return 'Fulfilled'
}
```

```js
// the async keyword is before the parameter
const myAsyncFunction = async parameter => {
  return 'Fulfilled'
}
```

This is basically the same with:

```js
function myAsyncFunction() {
  return Promise.resolve('Fulfilled')
}
```

So you can call it like this

```js
myAsyncFunction().then(result => console.log(result))
```

```txt
Fulfilled
```

And the `throw` of an `async` function is recognized as a promise `reject()`.

```js
const myAsyncFunction = async () => {
  throw 'Rejected'
}
```

```js
myAsyncFunction().catch(error => console.error(error))
```

```txt
Rejected
```

## Await

Await is only used with an `async` function. The `await` keyword is used in an `async` function to ensure that all promises returned in the `async` function are synchronized.

```js
const myAsyncFunction = async condition => {
  if (condition) {
    return 'Condition is fulfilled'
  } else {
    throw 'Condition is rejected'
  }
}
```

Remember, `await` keyword can only be used inside `async` function:

```js
const run = async condition => {
  try {
    const message = await myAsyncFunction(condition)
    console.log(message)
  } catch (error) {
    console.log(error)
  }
}
```

If `run(true)`:

```txt
Condition is fulfilled
```

If `run(false)`:

```txt
Condition is rejected
```

A real life example would be similar like this:

```js
const orderTaxiWithSchedule = async () => {
  try {
    const dateSchedule = await new Date()
    const message = await orderTaxi(dateSchedule)
    // only continue after orderTaxi() has been finished or fulfilled
    return message
  } catch (error) {
    // catch the error if not finished or rejected
    return error
  }
}
```

We can still use the `then`/`catch` methods:

```js
orderTaxiWithSchedule
  .then(message => console.log(message))
  .catch(error => console.error(error))
```

Or use the `async`/`await` keywords:

```js
const run = async () => {
  try {
    const message = await orderTaxiWithSchedule()
    console.log(message)
  } catch (error) {
    console.error(error)
  }
}

run()
```

---

## Asynchronous Programming References

- [Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)
- [Callback Hell](http://callbackhell.com)
- [JavaScript Promises for Dummies ― Scotch.io](https://scotch.io/tutorials/javascript-promises-for-dummies)
- [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Callbacks, Promises, and Async ― 10 Need to Know JavaScript Concepts ― Scotch.io](https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async)
- [Async + Await - Wes Bos at dotJS 2017](https://www.youtube.com/watch?v=9YkUCxvaLEk)
- [Asynchronous Programming: The End of The Loop from @jhusain on @eggheadio](https://egghead.io/courses/asynchronous-programming-the-end-of-the-loop)

### Guides

- [Panduan Komplit Asynchronous Programming pada Javascript  —  Part #1](https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-1-fca22279c056)
- [Panduan Komplit Asynchronous Programming pada Javascript  —  Part #2 Callback](https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-2-callback-3a717df6cfdf)
- [Panduan Komplit Asynchronous Programming pada Javascript  —  Part #3 Promise](https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-3-promise-819ce5d8b3c)
- [Panduan Komplit Asynchronous Programming pada Javascript  —  Part #4 async/await](https://medium.com/coderupa/panduan-komplit-asynchronous-programming-pada-javascript-part-4-async-await-fc504c344238)
