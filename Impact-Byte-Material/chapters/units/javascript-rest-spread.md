# JavaScript Rest and Spread Syntax

## Rest Parameters `...`

---

### arguments

A function can be called with any number of arguments, no matter how it is defined.

```js
function sum(a+b){
    return a + b
}

console.log(sum(1,2,3,4,5))
```

There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.

**_what about the rest?_**

The rest of the parameters can be included in the function definition by using three dots `...`. The dots literally mean “gather the remaining parameters into an `array”`.

After you initialze `...` you have to put name for contain them. (`...name`)

```js
function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6
```

We can choose to get the first parameters as variables, and gather only the rest.

The rest parameters gather all remaining arguments, so the following does not make sense and causes an error

```js
const {name, age, ...anotherInfo, address} = person
```

> The `...rest` **_must always be last_**.

```js
// example use object
const person = {
  name: "Sarah",
  age: 24,
  address: "Kemang, Jakarta",
  job: "Programmer"
};

const { name, age, ...anotherInfo } = person;

console.log(name);
console.log(age);
console.log(anotherInfo); // we get all the rest in person variable
```

---

## Spread Operator

We’ve just seen how to get an `array` from the list of parameters.

But sometimes we need to do exactly the reverse.

For instance, there’s a `built-in function Math.max` that returns the greatest number from a list:

```js
alert(Math.max(3, 5, 1)); // 5
```

Now let’s say we have an `array` `[3, 5, 1]`. How do we call `Math.max` with it?

Passing it “as is” won’t work, because `Math.max` expects a list of numeric arguments, not a single array:

```js
let arr = [3, 5, 1];

alert(Math.max(arr)); // NaN
```

And surely we can’t manually list items in the code `Math.max(arr[0], arr[1], arr[2])`, because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

`Spread operator` to the rescue! It looks similar to `rest parameters`, also using `...`, but does quite the opposite.

When `...arr` is used in the function call, it “expands” an _iterable object arr into the list of arguments_.

For Math.max:

```js
let arr = [3, 5, 1];

alert(Math.max(...arr)); // 5 (spread turns array into a list of arguments)
```

Also, the spread operator can be used to merge arrays:

````js
const students = ["Raga", "Badea"]
const newStudents = ["Kore", "Kara"]

const allStudent = [...students, ...newStudents]
````

## References

- [JavaScript Info](https://javascript.info/rest-parameters-spread-operator)
- [Medium](https://medium.com/javascript-in-plain-english/es6-spread-parameter-vs-rest-operator-5e3c924c4e1f)
