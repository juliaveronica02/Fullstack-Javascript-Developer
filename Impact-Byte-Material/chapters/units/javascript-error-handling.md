# Error Handling

No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an unexpected user input, an erroneous server response, and for a thousand other reasons.

Usually, a script “dies” (immediately stops) in case of an error, printing it to console.

But there’s a syntax construct `try..catch` that allows to “catch” errors and, instead of dying, do something more reasonable.

## The “try…catch” syntax

The try..catch construct has two main blocks: try, and then catch:

```js
try {
  // code ...
} catch (error) {
  // error handling
}
```

It works like this:

1. First, the code in try {...} is executed.
2. If there were no errors, then catch(err) is ignored: the execution reaches the end of try and goes on, skipping catch.
3. If an error occurs, then try execution is stopped, and the control flows to the beginning of catch(err). The err variable (can use any name for it) will contain an error object with details about what happened.

An example with an error:

```js
try{
    console.log("Hallo");
    lalaLand;
    console.log("how are you);
} catch (error) {
    console.log("error has occured! in this function");
}
```

`Error` objects have following properties:

- `message` – the human-readable error message.
- `name` – the string with error name (error constructor name).
- `stack` (non-standard, but well-supported) – the stack at the moment of error creation.

For instance:

```js
try {
  lalaLand; // error, variable is not defined!
} catch (err) {
  console.error(err.name); // ReferenceError
  console.error(err.message); // lalaLand is not defined
  console.error(err.stack); // ReferenceError: lalaLand is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.error(err); // ReferenceError: lalaLand is not defined
}
```

## Throw operator

We can also generate our own `errors` using the throw operator. Technically, the argument of throw can be anything, but usually it’s an `error` object inheriting from the built-in `Error` class. More on extending errors in the next chapter.

The syntax is:
`throw <error object>`

`JavaScript` has many built-in constructors for standard errors: `Error`, `SyntaxError`, `ReferenceError`, `TypeError`, `EvalError`, `InternalError`, `RangeError` and `URIError`. We can use them to create error objects as well.

Their syntax is:

```js
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```

You can find those error in `catch` using `instanceOf`.

For built-in `errors` (not for any objects, just for `errors`), the `name` property is exactly the name of the constructor. And `message` is taken from the argument.

For instance:

```js
let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O
```

When we create an error please refer to those standard errors.

For instance:
We gonna throw an error based on `JSON.Parse`
Let’s see what kind of error JSON.parse generates:

```js
try {
  JSON.parse("{ bad json o_O }");
} catch (e) {
  alert(e.name); // SyntaxError
  alert(e.message); // Unexpected token o in JSON at position 2
}

// As we can see, that’s a SyntaxError.
// And in our case, the absence of name is an error, as users must have a name.
// So let’s throw it:

let json = '{ "age": 30 }'; // incomplete data

try {
  let user = JSON.parse(json); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  alert(user.name);
} catch (e) {
  alert("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
}
```

## Rethrowing

`Rethrowing` is a very important pattern of `error` handling: a `catch` block usually expects and knows how to handle the particular `error` type, so it should `rethrow` errors it doesn’t know.

Is it possible that another unexpected error occurs within the try {...} block? Like a programming error (variable is not defined) or something else, not just this “incorrect data” thing.

For example:

```js
let json = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json); // <-- forgot to put "let" before user

  // ...
} catch (err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}
```

Of course, everything’s possible! Programmers do make mistakes. Even in open-source utilities used by millions for decades – suddenly a **bug** may be discovered that leads to _terrible_ hacks.

In our case, `try..catch` is meant to catch “incorrect data” errors. But by its nature, catch gets all errors from try. Here it gets an unexpected error, but still shows the same "JSON Error" message. That’s wrong and also makes the code more difficult to debug.

Fortunately, we can find out which error we get, for instance from its name:

```js
try {
  user = {
    /*...*/
  };
} catch (e) {
  alert(e.name); // "ReferenceError" for accessing an undefined variable
}
```

The rule is simple:

**Catch should only process errors that it knows and “rethrow” all others.**

The **“rethrowing”** technique can be explained in more detail as:

- Catch gets all errors.
- In the catch(err) {...} block we analyze the error object err.
- If we don’t know how to handle it, we do throw err.

The example below demonstrates how such errors can be caught by one more level of `try..catch`:

```js
function readData() {
  let json = '{ "age": 30 }';

  try {
    let user = JSON.parse(json);
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name");
    }
  } catch (e) {
    throw e; // rethrow (*)
  }
}

try {
  readData();
} catch (e) {
  alert("External catch got: " + e); // caught it!
}
```

## Finally

The `finally` block contains statements to be executed after the try and catch blocks execute. Additionally, the `finally` block executes before the code that follows the `try-catch-finally` statement.

It is also important to note that the `finally` block will execute whether or not an exception is thrown. If an exception is thrown, however, the statements in the `finally` block execute even if no `catch` block handles the exception that was thrown.

You can use the `finally` block to make your script fail gracefully when an exception occurs; for example, you may need to release a resource that your script has tied up. The following example opens a file and then executes statements that use the file (server-side JavaScript allows you to access files). If an exception is thrown while the file is open, the `finally` block closes the file before the script fails.

If `finally` exists, it runs in all cases:

- after `try`, if there were no errors,
- after `catch`, if there were errors.

The extended syntax looks like this:

```js
try {
   // ... try to execute the code ...
} catch(e) {
   // ... handle errors ...
} finally {
   // ... execute always ...
}
```

For instance:

```js
try {
  alert("try");
  if (confirm("Make an error?")) BAD_CODE();
} catch (e) {
  alert("catch");
} finally {
  alert("finally");
}
```

The code has two ways of execution:

1. If you answer “Yes” to “Make an error?”, then try -> catch -> finally.
2. If you say “No”, then try -> finally.

---

## References

- [JavaScript Info](http://javascript.info/try-catch)
- [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)