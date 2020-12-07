# JavaScript OOP (Object-Oriented Programming)

---

## `class` and `constructor`

Class is the planning or blueprint of the object. To declare a class, you use the `class` keyword with the name of the class, preferably using `TitleCase` name. Use a `constructor` for creating and initializing an object created with a class.

```js
class MyClass {
  constructor(parameterA, parameterB) {
    this.attributeA = parameterA
    this.attributeB = parameterB
  }
}
```

To instantiate it, use the `new` keyword:

```js
const newObject = new MyClass('parameterA', 'parameterB')

console.log(newObject)
```

A `class` can has one or multiple methods:

```js
class MyClass {
  constructor() {}

  classFunctionA() {
    // do something
  }

  classFunctionB = () => {
    // do something
  }

  classFunctionC(parameter) {
    // do something with parameter
  }

  classFunctionD = parameter => {
    // do something with parameter
  }
}
```

Example:

```js
class Animal {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(`The ${this.name} is walking`)
  }

  getName() {
    return this.name
  }

  setName(newName) {
    this.name = newName
  }
}

const raccoon = new Animal('Raccoon')

console.log(raccoon)
// Animal { name: 'Raccoon' }

raccoon.walk()
// The Raccoon is walking

console.log(raccoon.getName())
// Raccoon

raccoon.setName('Rocket Raccoon')
console.log(raccoon.getName())
// Rocket Raccoon
```

---

## `extends`

The `extends` keyword is used in class declarations or class expressions to create a class as a child or inheritance of another class. In order to get the constructor of the parent or inheritor, the `super` keyword with the parent's parameter(s) is/are used.

```js
class FantasticBeast extends Animal {
  constructor(name, species) {
    super(name)
    this.species = species
  }

  fly(destination) {
    console.log(`${this.name} the ${this.species} is flying to ${destination}`)
  }
}
```

All of the methods from the parent will be automatically inherited/copied, so the child can use them.

```js
const dragon = new FantasticBeast('Hungarian Horntail', 'Dragon')

console.log(dragon)
// FantasticBeast { name: 'Hungarian Horntail', species: 'Dragon' }

dragon.walk()
// The Hungarian Horntail is walking

console.log(dragon.getName())
// Hungarian Horntail

dragon.setName('Irlandian Firetail')
console.log(dragon.getName())
// Irlandian Firetail

dragon.fly('Hogwarts')
// Irlandian Firetail the Dragon is flying to Hogwarts
```

---

## JavaScript OOP References

- [Beginner's guide - Object Oriented Programming - DEV Community](https://dev.to/charanrajgolla/beginners-guide---object-oriented-programming)
- [Understanding JavaScript's Prototypal Inheritance from @iamtylerwclark on @eggheadio](https://egghead.io/courses/understanding-javascript-s-prototypal-inheritance)
