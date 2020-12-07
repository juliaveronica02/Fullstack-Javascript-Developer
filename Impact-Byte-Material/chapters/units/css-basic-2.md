# CSS Basic 2

## CSS Position

With CSS `position` we can alter an element position. It has 4 possible value:

- Static : Default value of position properties, They aren’t affected by any left, right, top or bottom value.
- Relative : Move element according to current position, without affecting another element.
- Absolute : When the position is set to absolute, an element can move according to the first positioned ancestor.
- Fixed : Move element according to browser window.

With 4 coordinates properties:

- Left
- Right
- Top
- Bottom

```css
/* Position relative example */
#relative-example {
  position: relative;
  border-color: red;
  left: 20px;
  top: 10px;
}

/* Position absolute example */
#relative-div {
  background: gold;
  height: 200px;
  padding: 10px;
  position: relative; /* This turns the #relative-div into a point of reference for the #absolute-div */
}

#absolute-div {
  background: limegreen;
  color: white;
  padding: 10px;
  position: absolute; /* This makes the #absolute-div freely movable */
  bottom: 10px; /* 10px from the bottom */
  left: 20px; /* 20px from the left */
}

/* Position fixed example*/
#fixed-example {
  position: fixed;
  left: 100px;
  top: 150px;
}
```

---

## CSS Pseudo Classes

Pseudo Classes is attached to selector. The pseudo-class will only define a particular state of that selector.

Some of popular Pseudo Classes are:

- :hover
- :visited

example:

```css
/* :hover example */
#example1 {
  color: blue;
}

#example1:hover {
  color: red;
}

/* :visited example */
a {
  color: blue;
}
a:visited {
  color: red;
}

/* :focus example */
.form-input {
  border: 2px solid grey;
  padding: 5px;
}
.form-input:focus {
  background: lightyellow;
  border-color: blue;
  outline: none;
}
```

---

## CSS Responsiveness with Media Query

![responsive web design, animated](https://media.giphy.com/media/b2CD0Qrq2ulwY/giphy.gif)

Media queries are useful when you want to modify your site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).

Media queries are used for the following:

- To conditionally apply styles with the CSS `@media` and `@import` at-rules.
- To target specific media for the `<link>`, `<source>`, and other HTML elements.

```
@media (hover: hover) { ... }
```

```
@media (max-width: 12450px) { ... }
```

https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

---

## CSS Style Guide

To assure our CSS quality, we can use a free tool called [csslint](http://csslint.net).

---

## CSS Basic References

## References

- [Codecademy](https://codecademy.com/learn/learn-css)
- [Shayhowe](https://learn.shayhowe.com/html-css/getting-to-know-css)
- [w3schools.com](https://w3schools.com/css/default.asp)
