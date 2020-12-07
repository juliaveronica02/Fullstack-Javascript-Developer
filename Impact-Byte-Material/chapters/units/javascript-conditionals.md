# JavaScript Conditionals

Sometimes, we need to perform different actions based on different conditions.

To do that, we use the `if` statement and the conditional (ternary) operator which we will be referring to as the "question mark" operator `?` for simplicity.

## `if` statement

The `if` statement evaluates a condition and, if the condition’s result is `true`, executes a block of code.

```js
let year = prompt('What year is right now?')

if (year == 2019) console.log('You are right!')
```

In the example above, the condition is a simple equality check `(year == 2019)`, but it can be much more complex.

If we want to execute more than one statement, we have to wrap our code block inside curly braces.

```js
if (year == 2015) {
  console.log("That's correct!")
  console.log("You're so smart!")
}
```

It is recommended wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability.

## Boolean Conversion

The `if (...)` statement evaluates the expression in its parentheses and converts the result to a boolean.

- A number `0`, an empty string `""`, `null`, `undefined`, and `NaN` all become false. Because of that they are called "falsy" values.
- Other values become true, so they are called "truthy".

The code under the falsy condition would never execute.

```js
// 0 is falsy, always wrong
if (0) {
  console.log(0)
}
```

And inside truthy condition, it always will execute once.

```js
// 1 is truthy, always right
if (1) {
  console.log(1)
}
```

We can also pass a pre-evaluated boolean value to `if`, like this:

```js
// equality evaluates to true or false
let condition = year == 2015

if (condition) {
  console.log(condition)
}
```

## `else` clause

The `if` statement may contain an optional `else` block. It executes when the condition is `false`.

```js
let year = prompt('What year is right now?')

if (year == 2019) {
  console.log('You guessed it right!')
} else {
  console.log('How can you be so wrong?') // any value except 2015
}
```

## `else if` clause

Sometimes, we’d like to test several variants of a condition. The `else if` clause lets us do that.

```js
let year = prompt('What year is right now?')

if (year < 2019) {
  console.log('Too early...')
} else if (year > 2019) {
  console.log('Too late')
} else {
  console.log('Exactly!')
}
```

In the code above, JavaScript first checks `year < 2015`. If that is falsy, it goes to the next condition `year > 2019`. If that is also falsy, it shows the last console.log. There can be more than one `else if` block. The final `else` is optional.

```js
let year = prompt('What year is right now?')

if (year < 2019) {
  console.log('Too early...')
} else if (year > 2019) {
  console.log('Too far')
} else if (year > 2100) {
  console.log('Too far, far away!')
} else {
  console.log('Exactly!')
}
```

## `?` Ternary operator

Sometimes, we need to assign a variable depending on a condition.

```js
let accessAllowed
let age = prompt('How old are you?', '')

if (age > 18) {
  accessAllowed = true
} else {
  accessAllowed = false
}

console.log(accessAllowed)
```

The so-called “ternary” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark `?`. The formal term “ternary” means that the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

```js
let result = condition ? value1 : value2
```

The condition is evaluated: if it’s truthy then `value1` is returned, otherwise is `value2`.

```js
let accessAllowed = age > 18 ? true : false
```

## Multiple `?`

A sequence of question mark operators ? can return a value that depends on more than one condition.

```js
let age = prompt('Your age?')

let message =
  age < 3
    ? 'Hi, baby!'
    : age < 18
    ? 'Hello, man!'
    : age < 100
    ? 'Greetings!'
    : 'What an unusual age!'

console.log(message)
```

It may be difficult at first to grasp what's going on. But after a closer look, we can see that it's just an ordinary sequence of tests:

1. The first question mark checks whether `age < 3`.
2. If true -- it returns `'Hi, baby!'`. Otherwise, it continues to the expression after the colon '":"', checking `age < 18`.
3. If that's true -- it returns `'Hello!'`. Otherwise, it continues to the expression after the next colon '":"', checking `age < 100`.
4. If that's true -- it returns `'Greetings!'`. Otherwise, it continues to the expression after the last colon '":"', returning `'What an unusual age!'`.

Here’s how this looks using `if..else`:

```js
if (age < 3) {
  message = 'Hi, baby!'
} else if (age < 18) {
  message = 'Hello!'
} else if (age < 100) {
  message = 'Greetings!'
} else {
  message = 'What an unusual age!'
}
```

## `switch case`

A `switch` statement can replace multiple `if` checks. It gives a more descriptive way to compare a value with multiple variants.

The `switch` has one or more `case` blocks and an optional default.

```js
switch(x) {
  // if (x === 'value1')
  case 'value1':
    ...
    [break]

  // if (x === 'value2')
  case 'value2':
    ...
    [break]

  default:
    ...
    [break]
}
```

- The value of `x` is checked for a strict equality to the value from the first `case` (that is, `value1`) then to the second (`value2`) and so on.
- If the equality is found, `switch` starts to execute the code starting from the corresponding `case`, until the nearest `break` (or until the end of `switch`).
- If no case is matched then the `default` code is executed (if it exists).

```js
let a = 1 + 2 + 1

switch (a) {
  case 3:
    console.log('Too small')
    break
  case 4:
    console.log('Exactly!')
    break
  case 5:
    console.log('Too large')
    break
  default:
    console.log("I don't know such values")
}
```

Here the `switch` starts to compare `a` from the first `case` variant that is `3`. The match fails. Then `4`. That's a match, so the execution starts from `case 4` until the nearest `break`.

**If there is no `break` then the execution continues with the next `case` without any checks.**

### Grouping of `case`

Several variants of `case` which share the same code can be grouped.

```js
let a = 1 + 2 + 1

switch (a) {
  case 4:
    console.log('Right!')
    break

  // (*) grouped two cases
  case 3:
  case 5:
    console.log('Wrong!')
    break

  default:
    console.log('The result is strange. Really.')
}
```

Now both `3` and `5` show the same message.

The ability to "group" cases is a side-effect of how `switch/case` works without `break`. Here the execution of `case 3` starts from the line `(*)` and goes through `case 5`, because there's no `break`.

---

## JavaScript Conditionals References

- [Conditional operators: if, '?'](http://javascript.info/ifelse)
- [The "switch" statement](https://javascript.info/switch)
