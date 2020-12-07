# JavaScript Global Objects `Date`

`Date` stores the date, time and provides methods for date or time management.

For instance, we can use it to store creation and modification times, to measure time, or just to print out the current date.

---

## Creation

To create a new `Date` object call `new Date()` with one of the following arguments.

### `new Date()`

Without arguments, create a `Date` object for the current date and time.

```js
let now = new Date()
console.log(now) // shows current date/time
```

### `new Date(milliseconds)`

Create a `Date` object with the time equal to number of milliseconds (1/1000 of a second) passed after the `Jan 1st of 1970 UTC+0`.

```js
// 0 means 01.01.1970 UTC+0
let selectedDate = new Date(0)
console.log(selectedDate)

// now add 24 hours, get 02.01.1970 UTC+0
let selectedDate = new Date(24 * 3600 * 1000)
console.log(selectedDate)
```

The number of milliseconds that has passed since the beginning of 1970 is called a _timestamp_.

It is a lightweight numeric representation of a date. We can always create a date from a timestamp usin`new Date(timestamp)` and convert the existing `Date` object to a timestamp using the `date.getTime()method` (see below).

### `new Date(datestring)`

If there is a single argument, and it's a string, then it is parsed with the `Date.parse` algorithm.

```js
let selectedDate = new Date('2017-01-26')
console.log(selectedDate)
// The time portion of the date is assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)
```

### `new Date(year, month, date, hours, minutes, seconds, ms)`

Create the date with the given components in the local time zone. Only two first arguments are obligatory.

Note:

- The `year` must have 4 digits: `2013` is okay, `98` is not.
- The `month` count starts with `0` (Jan), up to `11` (Dec).
- The `date` parameter is actually the day of month, if absent then `1` is assumed.
- If `hours/minutes/seconds/ms` is absent, they are assumed to be equal `0`.

```js
new Date(2011, 0, 1, 0, 0, 0, 0) // // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1) // the same, hours etc are 0 by default
```

The minimal precision is 1 ms (1/1000 sec):

```js
let date = new Date(2011, 0, 1, 2, 3, 4, 567)
console.log(date) // 1.01.2011, 02:03:04.567
```

---

## Access Date Components

There are many methods to access the year, month and so on from the `Date` object. But they can be easily remembered when categorized.

### `getFullYear`

Get the year (4 digits), such as `2010`.

Notice that it is not `getYear()`, but `getFullYear()`. Many JavaScript engines implement a non-standard method `getYear()`. This method is deprecated. It returns 2-digit year sometimes. Please never use it. There is `getFullYear()` for the year.

### `getMonth()`

Get the month number, **from 0 to 11**, not the name of the month.

### `getDate()`

Get the day of month, from 1 to 31, the name of the method does look a little bit strange.

### `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`

Get the corresponding time components.

### `getDay()`

Get the day of week, from `0` (Sunday) to `6` (Saturday). The first day is always Sunday, in some countries that's not so, but can't be changed.

**All the methods above return the components relative to the local time zone.**

There are also their UTC-counterparts, that return day, month, year and so on for the time zone `UTC+0`: `getUTCFullYear()`, `getUTCMonth()`, `getUTCDay()`. Just insert the `"UTC"` right after `"get"`.

If your local time zone is shifted relative to UTC, then the code below shows different hours:

```js
// current date
let date = new Date()

// the hour in your current time zone
console.log(date.getHours())

// the hour in UTC+0 time zone (London time without daylight savings)
console.log(date.getUTCHours())
```

Besides the given methods, there are two special ones that do not have a UTC-variant:

### `getTime()`

Returns the timestamp for the date -- a number of milliseconds passed from the January 1st of 1970 UTC+0.

### `getTimezoneOffset()`

Returns the difference between the local time zone and UTC, in minutes:

```js
// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
console.log(new Date().getTimezoneOffset())
```

---

## Setting Date Components

The following methods allow to set date or time components:

- `setFullYear(year [, month, date])`
- `setMonth(month [, date])`
- `setDate(date)`
- `setHours(hour [, min, sec, ms])`
- `setMinutes(min [, sec, ms])`
- `setSeconds(sec [, ms])`
- `setMilliseconds(ms)`
- `setTime(milliseconds)` sets the whole date by milliseconds since `01.01.1970 UTC`

Every one of them except `setTime()` has a UTC-variant, for instance: `setUTCHours()`.

As we can see, some methods can set multiple components at once, for example `setHours`. The components that are not mentioned are not modified.

```js
let today = new Date()

today.setHours(0)
console.log(today) // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0)
console.log(today) // still today, now 00:00:00 sharp.
```

---

## Autocorrection

The _autocorrection_ is a very handy feature of `Date` objects. We can set out-of-range values, and it will auto-adjust itself.

```js
let date = new Date(2013, 32) // 32 Jan 2013 ?!?
console.log(date) // ...is 1st Feb 2013!
```

Out-of-range date components are distributed automatically.

Let's say we need to increase the date "28 Feb 2016" by 2 days. It may be "2 Mar" or "1 Mar" in case of a leap-year. We don't need to think about it. Just add 2 days. The `Date` object will do the rest:

```js
let date = new Date(2016, 1, 28)
date.setDate(date.getDate() + 2)

console.log(date) // 1 Mar 2016
```

That feature is often used to get the date after the given period of time. For instance, let's get the date for "70 seconds after now":

```js
let date = new Date()
date.setSeconds(date.getSeconds() + 70)

console.log(date) // shows the correct date
```

We can also set zero or even negative values.

```js
let date = new Date(2016, 0, 2) // 2 Jan 2016

date.setDate(1) // set day 1 of month
console.log(date)

date.setDate(0) // min day is 1, so the last day of the previous month is assumed
console.log(date) // 31 Dec 2015
```

---

## Date to Number, Date Diff

When a `Date` object is converted to number, it becomes the timestamp same as `date.getTime()`.

```js
let date = new Date()
console.log(+date) // the number of milliseconds, same as date.getTime()
```

The important side effect: dates can be subtracted, the result is their difference in ms.

That can be used for time measurements.

```js
let start = new Date() // start counting

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i
}

let end = new Date() // done

console.log(`The loop took ${end - start} ms`)
```

---

## `Date.now()`

If we only want to measure the difference, we don't need the `Date` object.

There is a special method `Date.now()` that returns the current timestamp.

It is semantically equivalent to `new Date().getTime()`, but it does not create an intermediate `Date` object. So it is faster and does not put pressure on garbage collection (program's memory allocation organizer).

It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.

So this is probably better.

```js
let start = Date.now() // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i
}

let end = Date.now() // done

console.log(`The loop took ${end - start} ms`) // subtract numbers, not dates
```

---

## `Date.parse` from a String

The method `Date.parse(str)` can read a date from a string.

The string format should be: `YYYY-MM-DDTHH:mm:ss.sssZ`, where:

- `YYYY-MM-DD` is the date with year-month-day format.
- The character `"T"` is used as the delimiter.
- `HH:mm:ss.sss` is the time: hours, minutes, seconds and milliseconds.
- The optional `'Z'` part denotes the time zone in the format `+-hh:mm`. A single letter `Z` that would mean `UTC+0`.

Shorter variants are also possible, like `YYYY-MM-DD`, `YYYY-MM`, `YYYY`.

The call to `Date.parse(str)` parses the string in the given format and returns the timestamp (number of milliseconds from `1 Jan 1970 UTC+0`). If the format is invalid, returns `NaN`.

```js
let ms = Date.parse('2012-01-26T13:51:50.417-07:00')

console.log(ms) // 1327611110417  (timestamp)
```

We can instantly create a `new Date` object from the timestamp.

```js
let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'))

console.log(date)
```

---

## Trivia

- Date and time in JavaScript are represented with the `Date` object. We can not create "only date" or "only time", `Date` objects always carry both date and time.
- Months are counted from zero (yes, January is a zero month).
- Days of week in `getDay()` are also counted from zero (that is Sunday, not Monday).
- `Date` auto-corrects itself when out-of-range components are set. Good for adding or subtracting days/months/hours.
- Dates can be subtracted, giving their difference in milliseconds. That is because a `Date` becomes the timestamp when converted to a number.
- Use `Date.now()` to get the current timestamp fast.
- Unlike many other systems, timestamps in JavaScript are in milliseconds, not in seconds.

---

## JavaScript Global Objects `Date` References

- [Date and time](https://javascript.info/date)
