# Project JavaScript OOP

- Create a new repo for the project: `project-javascript-oop`
- Structure, modify, or create the essential files
<!-- - If you need Node modules, use `yarn` instead of `npm` -->
- Feel free to ideate the app by your self
- Push changes to GitHub and submit your project

## Directory Tree

```
.
├── index.js
├── .gitignore
├── index.html
├── README.md
```
<!-- ├── node_modules
├── package.json
└── yarn.lock -->

## JavaScript

```js
class Car {
  constructor(owner = 'Unknown Owner', name = 'Unknown Name') {
    this.owner = owner
    this.name = name
  }

  drive() {
    console.log(
      `The ${this.name} car owned by ${this.owner} drives on the road`
    )
  }

  getOwner() {
    return this.owner
  }

  getOwner() {
    return this.name
  }
}
```

```js
const myCar = new Car('Elon', 'Tesla Model S')

console.log(myCar)
// Car { owner: 'Elon', name: 'Tesla Model S' }

myCar.drive()
// The Tesla Model S car owned by Elon drives on the road

console.log(myCar.getOwner())
// Elon
```

```js
class SportsCar extends Car {
  constructor({ owner, name, color, price, engine }) {
    super(owner, name)
    this.color = color
    this.price = price
    this.engine = engine
  }

  getColor() {
    return this.color
  }

  getPrice() {
    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(this.price)

    return formattedPrice
  }

  getEngine() {
    return this.engine
  }
}
```

```js
const coolCar = new SportsCar({
  owner: 'Starman',
  name: 'Tesla Roadster',
  color: 'Red',
  price: '200000', // USD
  engine: 'Electric'
})

console.log(coolCar)
// SportsCar { ... }

coolCar.drive()
// The Tesla Roadster car owned by Starman drives on the road

console.log(coolCar.getColor())
// Red

console.log(coolCar.getPrice())
// $200,000
```

## Challenge

Hey! if you find this too easy try to _**hack**_ this out

Count the duration when it is started and when it is stopped

```js
//example
stopwatch.start() // this stopwatch start at 10:52:03 AM
stopwatch.stop() // this stopwatch stop at 10:52:20 AM
stopwatch.duration // 17.111
```

`console.log` the answer!

**Happy hacking!**


