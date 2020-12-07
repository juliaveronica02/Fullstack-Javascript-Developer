# JavaScript Variables

A variable is a "named storage" for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use either the `var`, `let`, or `const` keyword.

The statement below creates (in other words: declares or defines) some variable s with the name "message":

```js
var message
let message
const message
// choose one of them
```

After declared, the lifetime of a JavaScript variable starts.

We can declare variables to store data by using the var, let, or const keywords.

- `var` is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
- `let` is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
- `const` is like let, but the value of the variable can’t be changed.

We can then put some data into it by using the assignment operator `=`:

```js
message = 'Hello' // store the string
```

The string is now saved into the memory area associated with the variable. We can access it using the variable name:

```js
// shows the variable content
console.log(message)
window.alert(message)
```

To be concise, we can combine the variable declaration and assignment:

```js
let message = 'Hello!' // define the variable and assign the value

console.log(message) // Hello!
```

If you want to have multiple variables with better readability, please use a single line per variable.

```js
let name = 'Brendan Eich'
let age = 57
let message = 'Hello'
```

### `var` vs `let`

In older scripts, you may also find another keyword: var instead of let:

```js
var message = 'Hello'
```

The `var` keyword is almost the same as `let`. It also declares a variable, but in a slightly different, old way.

There are subtle differences between `let` and `var`, but they do not matter for us yet.

### Variable Naming

Variables should be named in a way that allows us to easily understand what’s inside them.

There are two limitations on variable names in JavaScript:

- The name must contain only letters, digits, or the symbols `$`and `_`.
- The first character must not be a digit.

Examples of valid names:

```js
let userName
let test123
```

When the name contains multiple words, `camelCase` is commonly used. That is: words go one after another, each word starting with a capital letter: `myVeryLongName`.

These names are valid:

```js
let $ = 1 // declared a variable with the name "$"
let _ = 2 // and now a variable with the name "_"

alert($ + _) // 3
```

Examples of incorrect variable names:

```js
let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name
```

Remember, case matters. Variables named `apple` and `AppLE` are two different variables.

Non-English letters are allowed, but not recommended. It is possible to use any language, including cyrillic letters or even hieroglyphs, like this:

```js
let имя = '...'
let 我 = '...'
```

### Reserved Names

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

For example: `let`, `class`, `return`, and `function` are reserved.

The code below gives a syntax error:

```js
let let = 5; // can't name a variable "let", error!
let return = 5; // also can't name it "return", error!
```

### Constants

To declare a constant (unchanging) variable, use const instead of let:

```js
const myBirthday = '18.04.1982'
```

Variables declared using const are called “constants”. They cannot be changed. An attempt to do so would cause an error:

```js
const myBirthday = '18.04.1982'

myBirthday = '01.01.2001' // error, can't reassign the constant!
```

Uppercase constants are used for difficult-to-remember values that are known prior to execution.

```js
const COLOR_RED = '#F00'
const COLOR_GREEN = '#0F0'
const COLOR_BLUE = '#00F'
const COLOR_ORANGE = '#FF7F00'

// ...when we need to pick a color
let color = COLOR_ORANGE
alert(color) // #FF7F00
```

Benefits:

- `COLOR_ORANGE` is much easier to remember than `"#FF7F00"`.
- It is much easier to mistype `"#FF7F00"` than `COLOR_ORANGE`.
- When reading the code, `COLOR_ORANGE` is much more meaningful than `#FF7F00`.

### Name things right

Talking about variables, there’s one more extremely important thing.

Please name your variables sensibly. Take time to think about this.

Variable naming is one of the most important and complex skills in programming. A quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it’s much easier to find information that is well-labeled. Or, in other words, when the variables have good names.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

Some good-to-follow rules are:

- Use human-readable names like `userName` or `shoppingCart`.
- Stay away from abbreviations or short names like `a`, `b`, `c`, `foo`, `bar`, `baz` unless you really know what you’re doing.
- Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your own mind. If a site visitor is called a "user" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`.

### Reuse or Create?

And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones. Such programmers save a little bit on variable declaration but lose ten times more on debugging.

An extra variable is good and much better, not evil.

```js
const user = '...' // for single value
const users = ['...', '...', '...'] // for multiple values
```

---

## JavaScript Variables References

- [Variables](http://javascript.info/variables)
