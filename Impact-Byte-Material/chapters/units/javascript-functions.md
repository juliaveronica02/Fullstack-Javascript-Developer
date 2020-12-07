# JavaScript Functions

Most of the time, we need to do a similar process over and over again. But not repeating as in "loop". In programming, there are functions. They allow the code to be called many times without redundant code. We’ve already seen examples of built-in functions, like `alert()`, but we can create functions of our own as well.

## Function Declaration

To create a function we can use a `function` declaration.

The `function` keyword goes first, then goes the _name of the function_, then a list of _parameters_ between the parentheses (empty in the example) and finally the code of the function or the function body between curly braces.

```js
function functionName(parameterOne, parameterTwo) {
  // function body
  // insert some processes here
}
```

```js
function logMessage() {
  console.log("Hello world!");
}

function alertMessage() {
  alert("Hello world!");
}
```

To execute or call them:

```js
logMessage();
logMessage();
logMessage();
// Hello world! three times via console

alertMessage();
alertMessage();
// Hello world! two times via alert
```

The main purposes of functions are to avoid code duplication or redundancy.

## Function Parameters

We can pass optional or arbitrary data to functions using parameters (also called _function arguments_) .

```js
// arguments: name, text
function showMessage(name, text) {
  console.log(`${text}, ${name}`);
}

showMessage("Alpha", "Hello"); // Hello, Alpha
showMessage("Betty", "Welcome"); // Welcome, Betty
```

## Function Parameters Default Values

If a parameter is not provided, then its value becomes `undefined`.

For instance, the previous function `showMessage(name, text)` can be called with a single argument:

```js
showMessage("Gamma");
```

There will be no error. Such a call would output `undefined, Gamma`. There is no `text`, so it is assumed that `text === undefined`.

If we want to use some default values, then we can specify it after `=`.

```js
function showMessage(name, text = "...") {
  console.log(`${text}, ${name}`);
}

showMessage("Delta"); // ..., Delta
```

```js
function showMessage(name = "Unknown", text = "...") {
  console.log(`${text}, ${name}`);
}

showMessage(); // ..., Unknown
```

## Function Returning a Value

A function can return a value back into the calling code as the result.

```js
function sum(numberA, numberB) {
  return numberA + numberB;
}

const resultA = sum(1, 2);
const resultB = sum(100, 1000);

console.log(resultA); // 3
console.log(resultB); // 1100
```

The directive `return` can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code (assigned to `variable` assigned).

There may be many occurrences of `return` in a single function. For instance:

```js
const myAge = 25;

function checkAge(age) {
  if (age > 18) return true;
  else return false;
}

function checkAllowance() {
  // call another function inside a function
  const allowed = checkAge(myAge);

  if (allowed) return "You are allowed";
  else return "You are not allowed";
}

const allowedMessage = checkAllowance();
```

Added complexity:

```js
const myAge = prompt("How old are you?");

function isAgeOlderThan18(age) {
  if (age > 18) return true;
  else return false;
}

function checkAllowance() {
  // call another function inside a function
  const allowed = isAgeOlderThan18(myAge);

  if (allowed) return "You are allowed";
  else return "You are not allowed";
}

function canHaveNationalID() {
  const can = isAgeOlderThan18(myAge);

  if (can) return "You can have national ID";
  else return "You can not have national ID yet";
}

const allowedMessage = checkAllowance();
const canHaveMessage = canHaveNationalID();

console.log("myAge:", myAge);
console.log("allowedMessage:", allowedMessage);
console.log("canHaveMessage:", canHaveMessage);
```

## Function Naming

Functions are actions. So their name is usually a **verb**. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a conventional practice to start a function with a verbal prefix which vaguely describes the action. There also must be an agreement within the team on the meaning of the prefixes.

- `show...` show something
  - `showMessage`
  - `showName`
  - `showPassword`
- `get...`: return a value
  - `getName`
  - `getAge`
  - `getAddress`
- `calculate...`: calculate something
  - `calculateSum`
  - `calculateSalary`
  - `calculateSquareArea`
- `create...`: create something
  - `createForm`
  - `createSuperPower`
  - `createToken`
- `check...`: check something and return a boolean (`true`/`false`)
  - `checkAge`
  - `checkToken`
  - `checkPermission`

With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

## Reusable Functions

One function should only do one action or less actions. A function should do exactly what is suggested by its name, no more. Do not overcomplicate process inside one function. Two independent actions usually deserve two functions, even if they are usually called together.

```js
function isOdd(value) {
  if (value % 2 !== 0) return true;
  else return false;
}

function isEven(value) {
  if (value % 2 === 0) return true;
  else return false;
}

const oddNumber = 101;
const evenNumber = 202;

console.log(isOdd(oddNumber)); // true
console.log(isOdd(evenNumber)); // false

console.log(isEven(oddNumber)); // false
console.log(isEven(evenNumber)); // true
```

## Function in a Variable

```js
const functionName = function(parameter) {
  // function body
};
```

```js
const logMessage = function() {
  console.log("Hello world!");
};

const logMessage = function(text) {
  console.log(text);
};
```

## Arrow Function

```js
const functionName = parameter => {
  // function body
};
```

```js
const logMessage = () => {
  console.log("Hello world!");
};

const logMessage = text => {
  console.log(text);
};

const logMessage = (text, mark) => {
  console.log(`${text}${mark}`);
};
```

```js
const logMessage = () => console.log("Hello world!");

const logMessage = text => console.log(text);

const logMessage = (text, mark) => console.log(`${text}${mark}`);
```

## Callback Function

Let’s look at more examples of passing `functions` as values and using function expressions.

We’ll write a `function ask(question, yes, no)` with three parameters:

_question_
Text of the question
_yes_
Function to run if the answer is “Yes”
_no_
Function to run if the answer is “No”

The function should ask the question and, depending on the user’s answer, call yes() or no():

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

In practice, such functions are quite useful. The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, such function usually draws a nice-looking question window. But that’s another story.

**The arguments showOk and showCancel of ask are called callback functions or just callbacks.**

The idea is that we pass a `function` and expect it to be **“called back”** later if necessary. In our case, _showOk_ becomes the callback for “yes” answer, and _showCancel_ for “no” answer.

We can use Function Expressions to write the same function much shorter:

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() {
    alert("You agreed.");
  },
  function() {
    alert("You canceled the execution.");
  }
);
```

Here, `functions` are declared right inside the `ask(...)` call. They have no name, and so are called anonymous. Such `functions` are not accessible outside of ask (because they are not assigned to `variables`), but that’s just what we want here.

## JavaScript Function References

- [Flashcards for JavaScript Developers](https://www.flashcardsfordevelopers.com/collections/5b945dc20d9bd6cbc6e67a2c)
  - [JavaScript Common Methods](https://www.flashcardsfordevelopers.com/decks/5b945d730d9bd6cbc6e6633c)
