# JavaScript Basic

---

## JavaScript History

JavaScript is the most widely used scripting language on Earth. And it has the largest library ecosystem of any programming language.

JavaScript is the "de facto" core language of the web, the only programming language that can run in all major web browsers.

Notably, "JavaScript" has [no relation](http://www.crockford.com/javascript/javascript.html) to "Java". It is like "Carpet" and "Car".

The official name of JavaScript is ECMAScript defined under Standard [ECMA-262](https://www.ecma-international.org/publications/standards/Ecma-262.htm).

---

## JavaScript Names

- ECMAScript: the official standard, not the actual programming language
- LiveScript: the deprecated name
- JavaScript: the current name
- ES5, ES6, ES7, ES+, ES Next

---

## JavaScript in Browser vs JavaScript in Node.js

JavaScript programming language these days can live in the [browser](https://enable-javascript.com) or a platform like [Node.js](https://nodejs.org).

Even historically, Node.js was forked as [io.js](https://github.com/nodejs/iojs.org) when there was a community dispute (problem).

### JavaScript in Browser Features

- As a frontend or client side application
- Perform interactivity to the web page
- Give an event feedback when there is a UI action
- Connect and manipulate HTML and CSS
- Have to be aware of user's browsers capability and features availability, application lives in client side
- Supported by all browsers

### JavaScript in Node.js Features

- As a backend or server side application
- Perform data processing to the client side application
- Give a response when there is a request
- Connect and manipulate database management system (DBMS)
- Don't have to worry of user's browsers, application lives in server side

### Common Features or Traits

- High level programming language, easy to understand in English
- Scripted or interpreted, not compiled
- Dynamic typing, you cannot force the data type to be consistent yet

---

## JavaScript Engines

Mozilla’s SpiderMonkey, the first JavaScript engine ever written, currently used in Mozilla Firefox. V8, Google’s JavaScript engine, used in Google Chrome.

Google Apps Script, a cloud-based/server-side interpreter that provides programmatic “macro-like” control of Google Apps services and documents.

Node.js, built on top of Chrome's V8, a platform which enables server-side applications to be written in JavaScript.

Windows includes JScript, a JavaScript variant in Windows Script Host.

Chakra, a fork of Jscript, is developed by Microsoft and used in their Edge browser. Yes, written as Jscript, not JavaScript.

Mozilla also offers Rhino, an implementation of JavaScript built in Java, typically embedded into Java applications to provide scripting to end users.

WebKit (except for the Chromium project) implements the JavaScriptCore engine.

---

## JavaScript Syntax

```js
var x = 0 // A global variable, because it is not in any function

function fun() {
  // local variables
  var z = 'foxes'
  var r = 'birds'
  var m = 'fish'

  function child() {
    var r = 'monkeys' // This variable is local and does not affect the "birds" r of the parent function.
    z = 'penguins' // Closure: Child function is able to access the variables of the parent function.
  }

  twenty = 20 // This variable is declared on the next line, but usable anywhere in the function, even before, as here
  var twenty

  child()
  return x // We can use x here, because it is global
}

fun()

console.log(z) // This line will raise a ReferenceError exception, because the value of z is no longer available
```

---

## JavaScript Sublanguages

### [TypeScript](http://typescriptlang.org)

JavaScript that scales with static typing. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

```ts
class Student {
  fullName: string
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new Student('Jane', 'M.', 'User')

document.body.innerHTML = greeter(user)
```

### [Flow](https://flow.org)

A Static Type Checker for JavaScript. Flow adds static typing to JavaScript to improve developer productivity and code quality.

```js
// @flow
function square(n: number): number {
  return n * n
}

square('2') // Error!
```

### [Dart](https://dartlang.org)

Structured web apps. Platform for scalable web app engineering. A delightful language for reliable webapps. Generate JavaScript with great performance and no runtime exceptions.

```dart
import 'dart:math' show Random;

main() async {
  print('Compute π using the Monte Carlo method.');
  await for (var estimate in computePi().take(500)) {
    print('π ≅ $estimate');
  }
}

/// Generates a stream of increasingly accurate estimates of π.
Stream<double> computePi({int batch = 100000}) async* {
  var total = 0;
  var count = 0;
  while (true) {
    var points = generateRandom().take(batch);
    var inside = points.where((p) => p.isInsideUnitCircle);
    total += batch;
    count += inside.length;
    var ratio = count / total;
    // Area of a circle is A = π⋅r², therefore π = A/r².
    // So, when given random points with x ∈ <0,1>,
    // y ∈ <0,1>, the ratio of those inside a unit circle
    // should approach π / 4. Therefore, the value of π
    // should be:
    yield ratio * 4;
  }
}

Iterable<Point> generateRandom([int seed]) sync* {
  final random = Random(seed);
  while (true) {
    yield Point(random.nextDouble(), random.nextDouble());
  }
}

class Point {
  final double x, y;
  const Point(this.x, this.y);
  bool get isInsideUnitCircle => x * x + y * y <= 1;
}
```

### [elm](http://elm-lang.org)

A delightful language for reliable webapps. Generate JavaScript with great performance and no runtime exceptions.

```elm
import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

main =
  Browser.sandbox { init = 0, update = update, view = view }

type Msg = Increment | Decrement

update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
```

### [CoffeeScript](https://coffeescript.org)

CoffeeScript is a little language that compiles into JavaScript.

```coffee
# Assignment:
number   = 42
opposite = true

# Conditions:
number = -42 if opposite

# Functions:
square = (x) -> x * x

# Arrays:
list = [1, 2, 3, 4, 5]

# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

# Splats:
race = (winner, runners...) ->
  print winner, runners

# Existence:
alert "I knew it!" if elvis?

# Array comprehensions:
cubes = (math.cube num for num in list)
```

---

## JavaScript Frameworks

[Most frequently used](https://jsreport.io/the-ultimate-guide-to-javascript-frameworks) JavaScript frameworks are React, Angular, Vue.js, CreateJS, jQuery, NodeJS, etc.

---

## JavaScript Basic Documentation References

- [JavaScript in 14 minutes](https://jgthms.com/javascript-in-14-minutes)
- [JavaScript.info - The Modern Javascript Tutorial](https://javascript.info)
- [JavaScript documentation — DevDocs](https://devdocs.io/javascript)
- [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Eloquent JavaScript](https://eloquentjavascript.net)
- [JavaScript Enlightenment](http://javascriptenlightenment.com)
- [JavaScript Tutorial on TutorialsPoint](https://www.tutorialspoint.com/javascript/index.htm)
- [JavaScript Tutorial on W3Schools](https://www.w3schools.com/js/default.asp)

## JavaScript Basic References

- [The Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c)
- [The JavaScript Handbook by Flavio Copes (PDF)](https://drive.google.com/open?id=1B-eWVHXw6roKhQWpRkiNNwHtb-66Gzif)
- [ES2015+ cheatsheet - DevHints.io](https://devhints.io/es6)
- [ES6 Syntax and Feature Overview – Tania Rascia](https://www.taniarascia.com/es6-syntax-and-feature-overview)
- [Understand JavaScript Arrays from @shaneosbourne on @eggheadio](https://egghead.io/courses/understand-javascript-arrays)
- [Learn ES6 (ECMAScript 2015) from @johnlindquist on @eggheadio](https://egghead.io/courses/learn-es6-ecmascript-2015)
- [Advanced Logging with the JavaScript Console from @mykola on @eggheadio](https://egghead.io/courses/js-console-for-power-users)
- [Data Structures and Algorithms in JavaScript from @kyleshevlin on @eggheadio](https://egghead.io/courses/data-structures-and-algorithms-in-javascript)
- [Algorithms in JavaScript from @iamtylerwclark on @eggheadio](https://egghead.io/courses/algorithms-in-javascript)
- [Flashcards for JavaScript Developers](https://www.flashcardsfordevelopers.com/collections/5b945dc20d9bd6cbc6e67a2c)
  - [JavaScript Common Methods](https://www.flashcardsfordevelopers.com/decks/5b945d730d9bd6cbc6e6633c)
  - [JavaScript Interview Questions](https://www.flashcardsfordevelopers.com/decks/5b945d730d9bd6cbc6e66349)

## JavaScript Book References

- [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748)

## JavaScript Other References

- [OpenJS Foundation](https://openjsf.org)
- [Hyperpolyglot Programming Languages](http://hyperpolyglot.org)
