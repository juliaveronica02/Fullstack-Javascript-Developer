# JavaScript Operators

---

## Terminologies

- **operators**: is modifier to variable or value, things like addition `+,` multiplication `*,` subtraction`-`, division `/`, and so on.
- **operand**: is what operators are applied to. For instance, in the multiplication of `5 * 2` there are two operands, the left operand is `5` and the right operand is `2`. Sometimes people call these "arguments" instead of "operands".
- **unary**: if operator requires or has a single operand. For example, the unary negation `-` reverses the sign of a number. Such as `-1` or `-age`
- **binary**: if operator requires or has two operands. The same minus exists in binary form as well. Such as `numberB - numberA`

---

## List of Operators

### Generic Operators

| Operator | Description    |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Modulus        |
| `++`     | Increment      |
| `--`     | Decrement      |

Modulus is Division Remainder.

### Assignment Operators

Assignment operators are used to assign values to JavaScript variables.

| Operator | Description      |
| -------- | ---------------- |
| `=`      | Value Assignment |
| `+=`     | Addition         |
| `-+`     | Subtraction      |
| `*=`     | Multiplication   |
| `/=`     | Division         |
| `%=`     | Modulus          |

### Comparison Operators

Comparison operators are used in logical statements to determine equality or difference between variables or values.

| Operator | Description                       |
| -------- | --------------------------------- |
| `==`     | equal to                          |
| `===`    | equal value and equal type        |
| `!=`     | not equal                         |
| `!==`    | not equal value or not equal type |
| `>`      | greater than                      |
| `<`      | less than                         |
| `>=`     | greater than or equal to          |
| `<=`     | less than or equal to             |

There are no `!>=` or `!<=`.

### Conditional (Ternary) Operators

The conditional operator assigns a value to a variable based on a condition.

| Syntax                                         | Example                                              |
| ---------------------------------------------- | ---------------------------------------------------- |
| `const result = (condition) ? value1 : value2` | `voteable = (age < 18) ? 'Too young' : 'Old enough'` |

Here if the variable "age" is a value below 18, the value of the variable "voteable" will be "Too young", otherwise the value of voteable will be "Old enough".

### Logical Operators

Logical operators are used to determine the logic between variables or values.

- Operator: Description: Example
- `&&` : and : `(condition1 < 10 && condition2 > 1)`
- `||` : or : `(condition2 === 5 || condition2 === 5)`
- `!` : not : `!condition` 


If both operand are boolean, then the result of each logical operator would be like:

| **Operator** | **Ekspresi 1** | **Ekspresi 2** | **Hasil** |
| ------------ | -------------- | -------------- | --------- |
| &&           | true           | true           | true      |
| &&           | true           | false          | false     |
| &&           | false          | true           | false     |
| &&           | false          | false          | false     |
| \|\|         | true           | true           | true      |
| \|\|         | true           | false          | true      |
| \|\|         | false          | true           | true      |
| \|\|         | false          | false          | false     |
| !            | true           | -              | false     |
| !            | false          | -              | true      |

Example of usage:

```javascript
var number1 = 6;
var number2 = 4;

console.log(number1 == 6 && number2 == 4); // output : true
console.log(number1 == 6 && number2 < 4); // output : false
console.log(number1 < 6 && number2 == 4); // output : false
console.log(number1 < 6 && number2 < 4); // output : false
console.log(number1 == 6 || number2 == 4); // output : true
console.log(number1 == 6 || number2 < 4); // output : true
console.log(number1 < 6 || number2 == 4); // output : true
console.log(number1 < 6 || number2 < 4); // output : false
console.log(!true); // output: false
console.log(!false); // output: true
```

Try it [here](https://repl.it/@sarahgushef/Operator-Logika)

### `typeof` Operator

The `typeof` operator returns the type of an expression, variable, object, function.

| Example                            | Result                                 |
| ---------------------------------- | -------------------------------------- |
| `typeof 'Torvalds'`                | `string`                               |
| `typeof 3.14`                      | `number`                               |
| `typeof NaN`                       | `number`                               |
| `typeof false`                     | `boolean`                              |
| `typeof [1, 2, 3, 4]`              | `object`                               |
| `typeof {name:'Torvalds', age:49}` | `object`                               |
| `typeof new Date()`                | `object`                               |
| `typeof function () {}`            | `function`                             |
| `typeof age`                       | `undefined` (if `age` is not declared) |
| `typeof null`                      | `object`                               |

### `delete` Operator

The delete operator deletes a property from an object.

```js
let person = { firstName: 'John', lastName: 'Doe', age: 50 }
delete person.age
console.log(person) // { firstName: 'John', lastName: 'Doe' }
```

Not recommended to use. The `delete` operator also should not be used on predefined JavaScript object properties. It can crash your application.

### `in` Operator

The `in` operator returns true if the specified property is in the specified object, otherwise `false`:

```js
// Arrays
var cars = ['Toyota', 'Volvo', 'BMW']
'Toyota' in cars // false (specify the index number instead of value)
0 in cars // true
1 in cars // true
4 in cars // false (does not existz)
'length' in cars // true  (length is an Array property)

// Objects
var person = { firstName: 'John', lastName: 'Doe', age: 50 }
'firstName' in person // true
'age' in person // true

// Predefined objects
'PI' in Math // true
'NaN' in Number // true
'length' in String // true
```

### `instanceof` Operator

The instanceof operator returns true if the specified object is an instance of the specified object:

```js
const cars = ['Toyota', 'Volvo', 'BMW']

cars instanceof Array // true
cars instanceof Object // true
cars instanceof String // false
cars instanceof Number // false
```

As you can see, almost everything in JavaScript is an `object`.

### Bitwise Operators

These operators are not JavaScript-specific. They are supported in most programming languages.

- `&`, `&&`: AND   
- `|`, `||`: OR      
- `^`: XOR      
- `~`: NOT            
- `<<`: LEFT SHIFT     
- `>>` : RIGHT SHIFT       
- `>>>` : ZERO-FILL RIGHT SHIFT 

---

## Binary `+`

With `+` binary operator, we can do string concatenation beyond just number addition.

```js
let helloWorld = 'Hello' + 'World'
console.log(helloWorld) // HelloWorld
```

If you want to add a spacing, you have to put it manually.

```js
let helloWorld = 'Hello' + ' ' + 'World'
console.log(helloWorld) // Hello World

let helloWorld = 'Hello ' + 'World' // there's an extra space after Hello
console.log(helloWorld) // Hello World
```

If you concate number with string, the result will be string. Be careful about the order.

```js
console.log(1 + 2 + '3') // "33", not "123" or 6
```

---

## Unary `+`

With `+` unary operator we can also do numeric conversion.

```js
// no effect on numbers
let scale = -2
console.log(+scale) // (still - 2)

// converts non-number to number
console.log(+true) // 1
console.log(+'') // 0
```

It actually does the same thing as `Number('string')`, but is shorter.

---

## Operators Precedence

If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the implicit priority order of operators.

From school, we all know that the multiplication `*` in the expression `1 + 2 * 2` should be calculated before the addition `+`. That’s exactly the precedence thing. The multiplication is said to have a _higher_ precedence than the addition.

| Precedence | Name           | Sign |
| ---------- | -------------- | ---- |
| …          | …              | …    |
| 16         | unary plus     | `+`  |
| 16         | unary negation | `-`  |
| 14         | multiplication | `*`  |
| 14         | division       | `/`  |
| 13         | addition       | `+`  |
| 13         | subtraction    | `-`  |
| …          | …              | …    |
| 3          | assignment     | `=`  |
| …          | …              | …    |

---

## Assignment

Let’s note that an assignment = is also an operator.

That’s why, when we assign a variable, like `x = 2 * 2 + 1`, the calculations are done first and then the = is evaluated, storing the result in x.

```js
let result = 2 * 2 + 1 // the same with (2 * 2) + 1

console.log(result) // 5
```

It is possible to chain assignments.

```js
let digitA, digitB, digitC

digitA = digitB = digitC = 1 + 2

console.log(digitA) // 3
console.log(digitB) // 3
console.log(digitC) // 3
```

---

## Remainder `%`

The remainder operator `%`, despite its appearance, is not related to percents. The result of `a % b` is the remainder of the integer division of `a` by `b`.

For instance.

```js
console.log(5 % 2) // 1 is a remainder of 5 divided by 2
console.log(8 % 3) // 2 is a remainder of 8 divided by 3
console.log(6 % 3) // 0 is a remainder of 6 divided by 3
```

---

## Exponentiation `**`

The exponentiation operator `**` is a recent addition to the language.

For a natural number `b`, the result of `a ** b` is a multiplied by itself `b` times.

For instance:

```js
console.log(2 ** 2) // 4(2 * 2)
console.log(2 ** 3) // 8(2 * 2 * 2)
console.log(2 ** 4) // 16(2 * 2 * 2 * 2)
```

The operator works for non-integer numbers as well.

For instance:

```js
console.log(4 ** (1 / 2)) // 2 (power of 1/2 is the same as a square root, that's maths)
console.log(8 ** (1 / 3)) // 2 (power of 1/3 is the same as a cubic root)
```

---

## Increment and Decrement

Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

Increment `++` increases a variable by 1:

```js
let counter = 2
counter++
// works the same as this but shorter
// counter = counter + 1
console.log(counter) // 3
```

Decrement -- decreases a variable by 1:

```js
let counter = 2
counter--
// works the same as this but shorter
// counter = counter - 1
console.log(counter) // 1
```

Increment/decrement can only be applied to variables. Trying to use it on a value like `5++` will give an error.

The operators `++` and `--` can be placed either before or after a variable.

- When the operator goes after the variable, it is in "postfix form": `counter++`.
- The "prefix form" is when the operator goes before the variable: `++counter`.

---

## Modify-in-Place

We often need to apply an operator to a variable and store the new result in that same variable.

For example:

```js
let n = 2
n = n + 5
n = n * 2
```

This notation can be shortened using the operators `+=` and `*=`:

```js
let n = 2
n += 5 // now n = 7 (same as n = n + 5)
n *= 2 // now n = 14 (same as n = n * 2)

console.log(n) // 14
```

Short "modify-and-assign" operators exist for all arithmetical and bitwise operators: `/=`, `-=`, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

```js
let n = 2
n *= 3 + 5

console.log(n) // 16 (right part evaluated first, same as n *= 8)
```

---

## Comma

The comma operator `,` is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

The comma operator allows us to evaluate several expressions, dividing them with a comma `,`. Each of them is evaluated but only the result of the last one is returned.

For example:

```js
let a = (1 + 2, 3 + 4)

console.log(a) // 7 (the result of 3 + 4)
```

Here, the first expression `1 + 2` is evaluated and its result is thrown away. Then, `3 + 4` is evaluated and returned as the result.

---

## JavaScript Operators References

- [Operators](https://javascript.info/operators)
- [Operator precedence - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- [JavaScript Operators Reference](https://www.w3schools.com/jsref/jsref_operators.asp)
