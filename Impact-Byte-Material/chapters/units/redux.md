# Redux

---

## Redux Overview

[Redux](https://redux.js.org) is like a **combination of `Context` and reducer functions**. Redux is built by [Dan Abramov](https://github.com/gaearon).

- `Context` is a way to pass data from `Provider` to `Consumer` (which can live anywhere in the app). It's used inside React.
- Reducer is a pure `function` that takes the previous state and an action, and returns the next state. So it only returns one kind of value, either `String`, `Number`, `Boolean`, `Array`, or `Object`.

Redux is defined as **a predictable state container for JavaScript apps**. It is a better state management solution when we have a lot of state in our app. Sometimes called "Predictable Unidirectional Data Flow".

**Features:**

- **Predictable**: Redux helps you write applications that **behave consistently**, run in different environments (client, server, and native), and are **easy to test**.
- **Centralized**: Centralizing your application's state and logic enables powerful capabilities like **undo/redo**, **state persistence**, and much more.
- **Debuggable**: The Redux DevTools make it easy to trace **when, where, why, and how your application's state changed**. Redux's architecture lets you log changes, use **"time-travel debugging"**, and even send complete error reports to a server.
- **Flexible**: Redux **works with any UI layer**, and has **a large ecosystem of addons** to fit your needs.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. You can use Redux by its own, together with React, or with any other view library.

React's component `state` vs Redux `store` differs in how they're located and managed. Traditional `state` is located in each components, while `store` is located in the outest root component but accessible to any components inside. Redux is an easier alternative for MobX and Flux, the application architecture that Facebook uses for building client-side web applications.

By the way, beware of [Redux Starter Kit](https://redux-starter-kit.js.org), we recommend to avoid it as it don't have a lot of community coverage yet.

---

## Redux Library

```sh
yarn add redux
```

Then use it as from inside `<script>` or a module (ES6 or Node.js CommonJS).

### Complete Implementation (ES6) in 5 Steps

```js
// 0. Import createStore function
import { createStore } from 'redux'

// 1. Reducer to Return a New State
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

// 2. Store to Contain All the States
const store = createStore(counter)

// 3. Subscribe if State Changes
store.subscribe(() => {
  console.log(store.getState())
})

// 4. Dispatch an Action
store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'DECREMENT'
})
```

### Reducer

Reducer is a pure function with `(state, action) => state` signature. It describes how an action transforms the state into the next state.

The shape of the state is up to you: it can be a primitive, an array, an object. The only important part is that you should not modify/mutate the state object, but return a new object if the state changes.

In this `counter` reducer example, we use a `switch case` statement and strings.

- The default `state` is `0`: `state = 0`
  - We can also use an object if we want: `{ value: 0 }`
- The default `action` is commonly an object: `{ type: 'ACTION_NAME' }`

```js
const counter = (state = 0, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```

### Store

Before creating the `store`, we must have at least one or some reducer(s) ready. Keep in mind that the store is immutable, so we can enhance the traceability (avoiding side effetects) and enable the ease of time travel debugging.

Here we create a Redux store holding the state of your app. The `store`'s API method are `dispatch`, `subscribe`, and `getState`.

**ES5**

```js
const store = Redux.createStore(counter)
```

**ES6**

```js
import { createStore } from 'redux' // ES6

const store = createStore(counter)
```

**Node.js CommonJS**

```js
const createStore = require('redux').createStore
```

### Subscribe

You can use `subscribe()` to update the UI in response to state changes. Normally you'd use a view binding library (e.g. `react-redux`) rather than `subscribe()` directly. However it can also be handy to persist the current state in the browser's storage.

```js
store.subscribe(() => {
  console.log(store.getState())
})
```

### Dispatch an Action

The only way to modify/mutate the internal state is to send/dispatch an action. The actions can be serialized, logged, or stored then later replayed.

```js
store.dispatch({ type: 'INCREMENT' }) // 1
store.dispatch({ type: 'INCREMENT' }) // 2
store.dispatch({ type: 'DECREMENT' }) // 1
store.dispatch({ type: 'DECREMENT' }) // 0
```

Note that we don't have to use `store.getState()` again since `console.log` is already called in `store.subscribe()` before. So it always run when the `state` is changed.

---

## Redux Middlewares

[A middleware can be used for a variety of things, including asynchronous API calls](https://redux.js.org/advanced/middleware#understanding-middleware). Think of it like intercept a function with another function in the middle. So when we dispatch something, we can do something about it before completing it.

Popular Redux middlewares:

- Redux DevTools Extension
- Redux Logger
- Redux Promise
- Redux Thunk
  - thunk, coined as a past tense of "think"
  - thunk, a function that wraps an expression to delay its evaluation
  - thunk write action creators that return a function instead of an action
- Redux Saga
  - saga, a separate thread in your application that's solely responsible for side effects
  - contrary to redux thunk, you don’t end up in callback hell, you can test your asynchronous flows easily and your actions stay pure

We will cover Redux Thunk later soon. As we will use it to ease the management of asynchronous flow in our application.

---

## Quick Notes of Redux Concepts

- Lego Architecture = Data + Product + Builder
- MVC Architecture = Model + View + Controller
- Redux Architecture = GStore (Global State Tree) + Reducers with Actions + Dispatchers

---

## Redux References

### Essentials

- [Redux Documentation](https://redux.js.org)
  - [Redux Basics](https://redux.js.org/basics)
- [Learn Redux Video Tutorial Course - 20 video tutorials to help you learn how to build JavaScript apps with React.js and Redux](https://learnredux.com)
- [Redux Tutorial - LearnCode.academy - YouTube](https://www.youtube.com/watch?v=1w-oQ-i1XB8&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt)
- [Learn Redux with Screencast Video Tutorials - egghead.io](https://egghead.io/browse/libraries/redux)
  - [Getting Started with Redux - Course by @dan_abramov @eggheadio](https://egghead.io/courses/getting-started-with-redux)

### Redux Middlewares

- [Async Flow · Redux](https://redux.js.org/advanced/async-flow)
- [Redux-Thunk vs. Redux-Saga](https://decembersoft.com/posts/redux-thunk-vs-redux-saga)
- [`redux-thunk`: Thunk middleware for Redux](https://github.com/reduxjs/redux-thunk)
- [The Basics Of ES6 Generators](https://davidwalsh.name/es6-generators)
- [Redux-Saga](https://redux-saga.js.org)
- [How to load data in React with redux-thunk, redux-saga, suspense & hooks](https://medium.freecodecamp.org/loading-data-in-react-redux-thunk-redux-saga-suspense-hooks-666b21da1569)

### Redux Alternatives

- [Flux - Application Architecture for Building User Interfaces](https://facebook.github.io/flux)
  - [Fluxxor is a set of tools to facilitate building JavaScript data layers using the Flux architecture](http://fluxxor.com)
- [MobX - Simple, scalable state management](https://mobx.js.org)
  - [Ten minute introduction to MobX and React](https://mobx.js.org/getting-started.html)
- [Learn MobX with Screencast Video Tutorials - egghead.io](https://egghead.io/browse/libraries/mobx)
  - [Manage Complex State in React Apps with MobX from @mweststrate on @eggheadio](https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx)
  - [Manage Application State with Mobx-state-tree from @mweststrate on @eggheadio](https://egghead.io/courses/manage-application-state-with-mobx-state-tree)
