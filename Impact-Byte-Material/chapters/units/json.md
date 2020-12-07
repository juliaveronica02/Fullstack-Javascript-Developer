# JSON Methods (JavaScript Object Notation)

The [JSON](http://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) is a general format to represent values and objects. It is described as in [RFC 4627](http://tools.ietf.org/html/rfc4627) standard. Initially it was made for JavaScript, but many other languages have libraries to handle it as well. So it's easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.

JavaScript provides methods:

- `JSON.stringify` to convert objects into JSON.
- `JSON.parse` to convert JSON back into an object.

Because as this, JSON itself in JavaScript will be treated either string or object.

### `JSON.stringify`

For instance, here we `JSON.stringify` a student:.

```js
const student = {
  name: "Alpha",
  age: 25,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null
};

const json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);
/* JSON-encoded object
{
  "name": "Alpha",
  "age": 25,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

The method `JSON.stringify(student)` takes the object and converts it into a string.

The resulting `json` string is a called _JSON-encoded_ or _serialized_ or _stringified_ or _marshalled_ object. We are ready to send it over the wire or put into a plain data store.

Please note that a JSON-encoded object has several important differences from the object literal:

- Strings use double quotes. No single quotes or backticks in JSON. So `'Alpha'` becomes `"Alpha"`.
- Object property names are double-quoted also. That's obligatory. So `age: 25` becomes `"age": 25`.

`JSON.stringify` can be applied to the other primitive data types as well.

Natively supported JSON types are:

- Objects `{ ... }`
- Arrays `[ ... ]`
- Primitives
  - strings
  - number,
  - boolean `true/false`
  - `null`

```js
// a number in JSON is just a number
console.log(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify("test")); // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]
```

JSON is data-only cross-language specification, so some JavaScript-specific object properties are skipped by `JSON.stringify`.

These will be ignored:

- Function properties (methods).
- Symbolic properties.
- Properties that store `undefined`.

```js
const user = {
  // ignored
  sayHello() {
    console.log("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log(JSON.stringify(user)); // {} (empty object)
```

Usually that is fine. If that's not what we want, then soon we'll see how to customize the process.

The great thing is that nested objects are supported and converted automatically.

```js
const meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

console.log(JSON.stringify(meetup));
/* The whole structure is stringified
{
  "title": "Conference",
  "room": { "number": 23, "participants": ["john","ann"] },
}
*/
```

### `JSON.parse`

To decode a JSON-string, we need another method named `JSON.parse`.

```js
const value = JSON.parse(string);
```

Remember we must return the resulting value to a variable.

```js
// stringified array
const numbers = "[0, 1, 2, 3]";

const numbersJSON = JSON.parse(numbers);

console.log(numbersJSON); // [0, 1, 2, 3]
console.log(numbersJSON[1]); // 1
```

Or for nested objects:

```js
const user =
  '{ "name": "Alpha", "age": 25, "isAdmin": false, "friends": [0, 1, 2, 3] }';

const userJSON = JSON.parse(user);

console.log(userJSON.friends); // [0, 1, 2, 3]
console.log(userJSON.friends[1]); // 1
```

The JSON may be as complex as necessary, objects and arrays can include other objects and arrays. But they must obey the format.

Here are typical mistakes in hand-written JSON (sometimes we have to write it for debugging purposes):

```js
const json = `{
  // mistake: property `name` without quotes
  name: "John",

  // mistake: single quotes in value (must be double)
  "surname": 'Smith',

  // mistake: single quotes in key (must be double)
  'isAdmin': false,

  // mistake: no "new" is allowed, only bare values
  "birthday": new Date(2000, 2, 3),

  // here all fine
  "friends": [0, 1, 2, 3]
}`
```

Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.

(Yes, we can not put comments in JSON, but above is just for example purpose)

There's another format named [JSON5](http://json5.org), which allows unquoted keys, comments, etc. But this is a standalone library, not in the standard specification of the language.

The regular JSON is that strict not because its developers are lazy, but to allow easy, reliable and very fast implementations of the parsing algorithm.

## JSON References

- [Flaviocopes](https://flaviocopes.com/json/)
- [w3schools](https://www.w3schools.com/whatis/whatis_json.asp)
- [JSON methods, toJSON](https://javascript.info/json)
- [JSON - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Working with JSON - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
- [JSON.stringify() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.parse() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
