# JavaScript Loops

We often need to repeat actions. For example, outputting goods from a list one after another or just running the same code for each number from `1` to `10`. Loops are a way to repeat the same code multiple times.

We covered 3 types of loops:

- `while`: The condition is checked before each iteration.
- `do...while`: The condition is checked after each iteration.
- `for ( ; ; )`: The condition is checked before each iteration, additional settings available.

To make an “infinite” loop, usually the `while(true)` construct is used.

## `while` loop

The `while` loop has the following syntax:

```js
while (condition) {
  // code
  // so-called "loop body"
}
```

While the `condition` is `true`, the `code` from the loop body is executed.

For instance, the loop below outputs `i` while `i < 3`:

```js
let i = 0;

while (i < 3) {
  console.log(i);
  i++;
  // shows 0, then 1, then 2
  // 3 is not shown because i < 3
}
```

Result:

```
0
1
2
```

A single execution of the loop body is called _an iteration_. The loop in the example above makes three iterations.

If `i++` was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by `while`.

For instance, a shorter way to write `while (i != 0)` is `while (i)`:

```js
let i = 3;
// when i becomes 0, the condition becomes falsy, and the loop stops
while (i) {
  console.log(i);
  i--;
}
```

Result:

```js
3;
2;
1;
```

`0` is not shown because it is a falsy value.

---

## `do...while` loop

The condition check can be moved _below_ the loop body using the `do..while` syntax.

```js
do {
  // loop body
} while (condition);
```

The loop will first execute the body, then check the condition, and, while it is truthy, execute it again and again.

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 3);
```

Result:

```js
0;
1;
2;
```

This form of syntax should only be used when you want the body of the loop to execute **at least once** regardless of the condition being truthy. Usually, the other form is preferred: `while(...) {...}`.

---

## `for` loop

The `for` loop is the most commonly used loop.

```js
for (begin; condition; step) {
  // loop body
}
```

The loop below runs `console.log(i)` for `i` from `0` up to (but not including) `3`.

```js
for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  console.log(i);
}
```

Result:

```js
0;
1;
2;
```

`for` statement parts.

| Part      | Code             | Explanation                                                               |
| --------- | ---------------- | ------------------------------------------------------------------------- |
| begin     | `i = 0`          | Executes once upon entering the loop.                                     |
| condition | `i < 3`          | Checked before every loop iteration. If false, the loop stops.            |
| step      | `i++`            | Executes after the body on each iteration but before the condition check. |
| body      | `console.log(i)` | Runs again and again while the condition is truthy.                       |

The general loop algorithm works like multiple or repeated `if` conditions, with different condition and body depending on the situation.

```
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```

## `continue` and `break`

**_Breaking the loops_**

Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special break directive.

```js
let text = "";
let i;
for (i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i;
}
console.log(text);
```

On code above, the code will stop when `i` is equal to 3.

**_Continue to the next iteration_**

The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we’re done with the current iteration and would like to move on to the next one.

```js
let text = "";
let i;
for (i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i;
}
console.log(text);
```

On code above, the `continue` directive stops executing the body and passes control to the next iteration of for (with the next number). So the iteration will continue to start `i` as 4.

---

## JavaScript Loops References

- [Loops: while and for](https://javascript.info/while-for)
