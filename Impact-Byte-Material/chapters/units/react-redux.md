# React Redux

Before getting into using Redux in React, it's important to know about `Context` first, because React Redux use it under the hood.

---

## React + Redux

To integrate Redux into React, there's [`react-redux`](https://github.com/reactjs/react-redux), the official React bindings for Redux.

```sh
yarn add redux react-redux
```

### `App.js`: `createStore` + `Provider`

```jsx
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Content from './components/Content'
import Counter from './components/Counter'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={reduxStore}>
      <div>
        <Content />
        <Counter />
      </div>
    </Provider>
  )
}

export default App
```

`<Provider>` is similar to the previous `store.subscribe`. But here, it is inside a React component.

Here, in order to use the Redux DevTools instantly, we put `window.__REDUX_DEVTOOLS_EXTENSION__()` inside the `createStore`

```js
const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```

### `Counter.js`: `connect` + `mapStateToProps`

```js
import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>Clicked: {this.props.count} times</p>
        <p>
          <button
            onClick={() => {
              this.props.dispatch({ type: 'INCREMENT' })
            }}
          >
            INCREMENT
          </button>
          <button
            onClick={() => {
              this.props.dispatch({ type: 'DECREMENT' })
            }}
          >
            DECREMENT
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)
```

To retrieve the store's `state` and `dispatch` inside a component, we need to pass the `state` as into a `props` for our component via `mapStateToProps`.

We can also use an anonymous function:

```js
export default connect(state => {
  return {
    count: state.count
  }
})(Counter)
```

`mapStateToProps` is quite similar to the expanded `setState`:

```js
this.setState({ value: this.state.value + 1 })
```

```js
this.setState(() => {
  return {
    value: this.state.value + 1
  }
})
```

### `Content.js`: `connect` + `mapStateToProps`

```js
import React from 'react'
import { connect } from 'react-redux'

const Content = props => {
  return <h1>Build React Redux app, {props.count} times</h1>
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Content)
```

Here, any component can retrieve the same `state` as into a `props`.

---

## React + Redux + React Router

So you want to do routing with your Redux app. You can use it with React Router. Redux will be the source of truth for your data and React Router will be the source of truth for your URL. There's the guide for [usage with React Router](https://redux.js.org/advanced/usage-with-react-router).

---

## Later Notes to Create a React Redux app

- Implement in the following order:
  1. View/Presentational Component
  2. Container Component
  3. React Router `Route`s
  4. REST API request
  5. Actual `App`
- Implement constant action types to create action creators
- Implement reducers (that return a new `state` object), then plug them into `combineReducers()`
- Configure Store by `createStore()` with `rootReducer`, then use Redux Middleware
- Sync React Component with Redux Store with `connect()`
- Map state from `store` and merge to `props` using `mapStateToProps()`

---

## React Redux References

### React + Redux

- [Usage with React · Redux](https://redux.js.org/basics/usage-with-react)
- [`react-redux`](https://github.com/reactjs/react-redux)
- [Learn Redux with Screencast Video Tutorials - egghead.io](https://egghead.io/browse/libraries/redux)
  - [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
- [React State vs. Redux State: When and Why?](https://spin.atomicobject.com/2017/06/07/react-state-vs-redux-state)
- [Component State vs Redux Store – Netscape – Medium](https://medium.com/netscape/component-state-vs-redux-store-1eb0c929277)
- [`notrab/create-react-app-redux` - React Router, Redux, Redux Thunk & Create React App boilerplate](https://github.com/notrab/create-react-app-redux)
  - [Getting started with create-react-app, Redux, React Router & Redux Thunk](https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f)
  - [Example Application](https://cra-redux-router-thunk.herokuapp.com)
- [`r-park/todo-react-redux` - Todo app with Create-React-App • React-Redux • Firebase • OAuth](https://github.com/r-park/todo-react-redux)

### Redux Browser Extensions

- [Redux DevTools - DevTools for Redux with hot reloading, action replay, and customizable UI](https://github.com/reduxjs/redux-devtools)
- [Redux DevTools Extension Guide](http://extension.remotedev.io)
- [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### React + Redux + React Router

- [Usage with React Router · Redux](https://redux.js.org/advanced/usage-with-react-router)
