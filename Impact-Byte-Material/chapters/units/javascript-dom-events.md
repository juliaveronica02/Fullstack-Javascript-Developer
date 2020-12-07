# JavaScript DOM Events

DOM events mean browser events, event properties, and handling patterns in the DOM.

---

An _event_ is a signal that something has happened. All DOM nodes generate such signals. But events are not limited to DOM only.

Here is a list of the most useful DOM events, just to take a look at.

**Mouse Events:**

- `click` when the mouse clicks on an element (touchscreen devices generate it on a tap).
- `contextmenu` when the mouse right-clicks on an element.
- `mouseover` and `mouseout` when the mouse cursor comes over / leaves an element.
- `mousedown` and `mouseup` when the mouse button is pressed / released over an element.
- `mousemove` when the mouse is moved.

**Form Element Events:**

- `submit` when the visitor submits a `<form>`.
- `focus` when the visitor focuses on an element, e.g. on an `<input>`.

**Keyboard Events:**

- `keydown` and `keyup` when the visitor presses and then releases the button.

**Document Events:**

- `DOMContentLoaded` when the HTML is loaded and processed, DOM is fully built.

**CSS Events:**

- `transitionend` when a CSS-animation finishes.

There are many other events. We will get into more details of particular events in next chapters.

## Event Handlers

To react on events we can assign a _handler_, a function that runs in case of an event.

Handlers are a way to run JavaScript code in case of user actions.

There are several ways to assign a handler. Let's see them, starting from the simplest one.

### HTML-Attribute

A handler can be set in HTML with an attribute named `on<event>`.

For instance, to assign a `click` handler for an `input`, we can use `onclick`.

```html
<input value="Click This" onclick="console.log('Click!')" type="button" />
```

On mouse click, the code inside `onclick` runs.

Please note that inside `onclick` we use single quotes, because the attribute itself is in double quotes. If we forget that the code is inside the attribute and use double quotes inside, like this: `onclick="console.log("Click!")"`, then it won't work right.

An HTML-attribute is not a convenient place to write a lot of code, so we'd better create a JavaScript function and call it there.

Here a click runs the function `countDragons()`.

```html
<script>
  function countDragons() {
    for (let i = 1; i <= 3; i++) {
      console.log('Rabbit number ' + i)
    }
  }
</script>

<input type="button" onclick="countDragons()" value="Count some dragons!" />
```

As we know, HTML attribute names are not case-sensitive, so `ONCLICK` works as well as `onClick` and `onCLICK`, but usually attributes are lowercased: `onclick`.

### DOM Property

We can assign a handler using a DOM property `on<event>`.

For instance, `element.onclick`:

```html
<input id="element" type="button" value="Click me" />
<script>
  element.onclick = function() {
    console.log('Thank you')
  }
</script>
```

If the handler is assigned using an HTML-attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property.

So this way is actually the same as the previous one.

**The handler is always in the DOM property: the HTML-attribute is just one of the ways to initialize it.**

These two code pieces work the same:

#### Only HTML:

```html
<input type="button" onclick="console.log('Click!')" value="Button" />
```

#### HTML + JS:

```html
<input type="button" id="button" value="Button" />
<script>
  button.onclick = function() {
    console.log('Click!')
  }
</script>
```

**As there's only one `onclick` property, we can't assign more than one event handler.**

In the example below adding a handler with JavaScript overwrites the existing handler:

```html
<input
  type="button"
  id="element"
  onclick="console.log('Before')"
  value="Click me"
/>

<script>
  element.onclick = function() {
    // overwrites the existing handler
    console.log('After') // only this will be shown
  }
</script>
```

By the way, we can assign an existing function as a handler directly:

```js
function sayThanks() {
  console.log('Thanks!')
}

element.onclick = sayThanks
```

To remove a handler, assign `element.onclick = null`.

---

## Browser Default Actions

Many events automatically lead to browser actions.

- A click on a link -- initiates going to its URL.
- A click on submit button inside a form -- initiates its submission to the server.
- Pressing a mouse button over a text and moving it -- selects the text.

If we handle an event in JavaScript, often we don not want browser actions. Fortunately, it can be prevented.

### Preventing Browser Actions

There are two ways to tell the browser we don't want it to act:

- The main way is to use the `event` object. There's a method `event.preventDefault()`.
- If the handler is assigned using `on<event>` (not by `addEventListener`), then we can just return `false` from it.

Here, a click to links does not lead to URL change.

```html
<a href="/" onclick="return false">Click here</a>
or
<a href="/" onclick="event.preventDefault()">here</a>
```

It is not necessary to return true, The value returned by an event handler is usually ignored. The only exception is `return false` from a handler assigned using `on<event>`. In all other cases, the return is not needed and it is not processed anyhow.

#### Example

Consider a site menu, like this:

```html
<ul id="menu" class="menu">
  <li><a href="/html">HTML</a></li>
  <li><a href="/javascript">JavaScript</a></li>
  <li><a href="/css">CSS</a></li>
</ul>
```

Menu items are links `<a>`, not buttons `<button>`. There are several benefits, for instance:

- Many people like to use "right click" -- "open in a new window". If we use `<button>` or `<span>`, that doesn not work.
- Search engines follow `<a href="...">` links while indexing, so your site will be.

So we use `<a>` in the markup. But normally we intend to handle clicks in JavaScript. So we should prevent the default browser action.

```js
menu.onclick = function(event) {
  if (event.target.nodeName != 'A') return

  let href = event.target.getAttribute('href')
  alert(href) // ...can be loading from the server, UI generation etc

  return false // prevent browser action (don't go to the URL)
}
```

If we omit `return false`, then after our code executes the browser will do its "default action", following to the URL in `href`.

## Prevent Further Events

Certain events flow one into another. If we prevent the first event, there will be no second event.

For instance, `mousedown` on an `<input>` field leads to focusing in it, and the `focus` event. If we prevent the `mousedown` event, there is no focus.

But if you click the second one, there is no focus.

```html
<input value="Focus works" onfocus="this.value=''" />
<input onmousedown="return false" onfocus="this.value=''" value="Click me" />
```

That is because the browser action is canceled on `mousedown`. The focusing is still possible if we use another way to enter the input. For instance, the <kbd>Tab</kbd> key to switch from the 1st input into the 2nd. But not with the mouse click any more.

---

## Trivia

There are many default browser actions:

- `mousedown` -- starts the selection, move the mouse to select.
- `click` on `<input type="checkbox">` -- checks/unchecks the `input`.
- `submit` -- clicking an `<input type="submit">` or hitting <kbd>Enter</kbd> inside a form field causes this event to happen, and the browser submits the form after it.
- `wheel` -- rolling a mouse wheel event has scrolling as the default action.
- `keydown` -- pressing a key may lead to adding a character into a field, or other actions.
- `contextmenu` -- the event happens on a right-click, the action is to show the browser context menu.

All the default actions can be prevented if we want to handle the event exclusively by JavaScript.

To prevent a default action, use either `event.preventDefault()` or `return false`. The second method works only for handlers assigned with `on<event>`.

---

## Stay Semantic, Don't Abuse

Technically, by preventing default actions and adding JavaScript we can customize the behavior of any elements. For instance, we can make a link `<a>` work like a button, and a button `<button>` behave as a link (redirect to another URL or so).

But we should generally keep the semantic meaning of HTML elements. For instance, `<a>` should preform navigation, not a button.

Besides being "just a good thing", that makes your HTML better in terms of accessibility for all people.

Also if we consider the example with `<a>`, then please note that a browser allows to open such links in a new window (by right-clicking them and other means). And people like that. But if we make a button behave as a link using JavaScript and even look like a link using CSS, then `<a>`-specific browser features still won't work for it.

---

## The special case of browser event handlers

In event handlers callbacks, `this` refers to the HTML element that received the event:

```js
document.querySelector('#button').addEventListener('click', function(e) {
  console.log(this) // HTMLElement
}
```

You can bind it using

```js
document.querySelector('#button').addEventListener(
  'click',
  function(e) {
    console.log(this) // window, if global, or else, your context
  }.bind(this)
)
```

---

## JavaScript DOM Events References

- [Browser: Document, Events, Interfaces](http://javascript.info/ui)
  - [Introduction into Events](http://javascript.info/events)
    - [Introduction to browser events](http://javascript.info/introduction-browser-events)
    - [Bubbling and capturing](http://javascript.info/bubbling-and-capturing)
    - [Event delegation](http://javascript.info/event-delegation)
    - [Browser default actions](http://javascript.info/default-browser-action)
