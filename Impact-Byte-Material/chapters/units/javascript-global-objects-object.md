# JavaScript Global Objects `Object`

## Function within Object

```js
const human = {
  name: 'Alpha Avalon',
  age: 25,

  // function declaration
  walk: function() {
    console.log(`${human.name} is walking`)
  },

  // arrow function declaration
  run: speed => {
    console.log(`Run, run, run! ${speed} km/h!`)
  }
}
```

```js
human.walk()
```

```txt
Alpha Avalon is walking
```

```js
human.run(21)
```

```txt
Run, run, run! 21 km/h!
```

---

## Object Access

### Square brackets

For multiword properties, the dot `.` access does not work:

```js
// this would give a syntax error
user.walk fast = true
```

That's because the dot `.` requires the key to be a valid variable identifier. That is, no spaces and other limitations. There's an alternative "square bracket notation" that works with any string.

```js
const user = {}

// set
user['walk fast'] = true

// get
console.log(user['walk fast']) // true

// delete
delete user['walk fast']
```

Now everything is fine. Please note that the string inside the brackets is properly quoted.

Square brackets also provide a way to obtain the property name as the result of any expression, as opposed to a literal string, like from a variable.

```js
const key = 'walk fast'

// same as user["walk fast"] = true
user[key] = true
```

Here, the variable `key` may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility. The dot notation cannot be used in a similar way.

```js
const user = {
  name: 'Alpha',
  age: 25
}

const key = prompt('What do you want to know about the user?', 'name')

// access by variable
console.log(user[key]) // John (if enter "name")
```

### Computed Properties

We can use square brackets in an object literal. That's called _computed properties_.

```js
const fruit = prompt('Which fruit to buy?', 'apple')

const bag = {
  // the name of the property is taken from the variable fruit
  [fruit]: 5
}

console.log(bag.apple) // 5 if fruit="apple"
```

The meaning of a computed property is simple: `[fruit]` means that the property name should be taken from `fruit`. So, if a visitor enters `"apple"`, `bag` will become `{ apple: 5 }`.

```js
const fruit = prompt('Which fruit to buy?', 'apple')
const bag = {}

// take property name from the fruit variable
bag[fruit] = 5
```

But the prior looks nicer and easier to modify.

We can use more complex expressions inside square brackets.

```js
const fruit = 'apple'

const bag = {
  [fruit + 'Macbooks']: 5 // bag.appleMacbooks = 5
}
```

Square brackets are much more powerful than the dot notation. They allow any property names and variables. But they are also more cumbersome to write.

So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets.

### Property Value Shorthand

In real code we often use existing variables as values for property names.

```js
const makeUser = (name, age) => {
  return {
    name: name,
    age: age
    // ...other properties
  }
}

const user = makeUser('Alpha', 25)

console.log(user.name) // Alpha
```

In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there's a special _property value shorthand_ to make it shorter.

Instead of `name: name` we can just write `name`, like this:

```js
const makeUser = (name, age) => {
  return {
    name, // same as name: name
    age // same as age: age
    // ...
  }
}
```

We can use both normal properties and shorthands in the same object.

```js
const user = {
  name, // same as name:name
  age: 30
}
```

---

## Cloning and Merging with `Object.assign`

Remember, copying an object variable creates one more reference to the same object.

But what if we need to duplicate an object? Create an independent copy, a clone?

That's also doable, but a little bit more difficult, because there's no built-in method for that in JavaScript. Actually, that's rarely needed. Copying by reference is good most of the time.

But if we really want that, then we need to create a new object and replicate the structure of the existing one by iterating over its properties and copying them on the primitive level.

```js
const user = {
  name: 'Alpha',
  age: 25
}

// the new empty object
const clonedUser = {}

// copy all user properties into it
for (let key in user) {
  clonedUser[key] = user[key]
}

// now clonedUser is a fully independent clone from the user
clonedUser.name = 'Betty' // changed the data in it

console.log(user.name) // still Alpha in the original object
console.log(clonedUser.name) // change to Betty in the cloned object
```

Also we can use the method `Object.assign` for that.

```js
Object.assign(destination, [src1, src2, src3...])
```

- Arguments `destination`, and `src1, ..., srcN` (can be as many as needed) are objects.
- It copies the properties of all objects `src1, ..., srcN` into `destination`. In other words, properties of all arguments starting from the 2nd are copied into the 1st. Then it returns `destination`.

We can use it to merge several objects into one.

```js
const user = { name: 'Alpha' }

const permissions1 = { canView: true }
const permissions2 = { canEdit: true }

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2)

console.log(user)
// { name: "Alpha", canView: true, canEdit: true }
```

If the receiving object (`user`) already has the same named property, it will be overwritten.

```js
const user = { name: 'Alpha' }

// overwrite name, add isAdmin
Object.assign(user, { name: 'Betty', isAdmin: true })

console.log(user)
// { name: "Betty", isAdmin: true }
```

We also can use `Object.assign` to replace the loop for simple cloning.

```js
const user = {
  name: 'Alpha',
  age: 25
}

const clone = Object.assign({}, user)
```

It copies all properties of `user` into the empty object and returns it. Actually, the same as the loop, but shorter.

Until now we assumed that all properties of `user` are primitive. But properties can be references to other objects. What to do with them?

```js
const user = {
  name: 'Alpha',
  sizes: {
    height: 182,
    width: 50
  }
}

console.log(user.sizes.height) // 182
```

Now it's not enough to copy `clone.sizes = user.sizes`, because the `user.sizes` is an object, it will be copied by reference. So `clone` and `user` will share the same sizes.

```js
const user = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50
  }
}

const clonedUser = Object.assign({}, user)

console.log(user.sizes === clonedUser.sizes) // true, same object

// user and clonedUser share sizes
user.sizes.width++ // change a property from one place
console.log(user.sizes.width) // 51, changed tod
console.log(clonedUser.sizes.width) // 51
```

To fix that, we should use the cloning loop that examines each value of `user[key]` and, if it's an object, then replicate its structure as well. That is called a "deep cloning".

There's a standard algorithm for deep cloning that handles the case above and more complex cases, called the [Structured cloning algorithm](http://w3c.github.io/html/infrastructure.html#safe-passing-of-structured-data).

---

## JavaScript Global Objects `Object` References

- [Objects](https://javascript.info/object)
- [Object - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Working with objects - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Javascript Object methods every developer should know](https://medium.com/youstart-labs/javascript-object-methods-every-developer-should-know-c68c132a658)
- [How to deep clone a JavaScript object](https://flaviocopes.com/how-to-clone-javascript-object)
