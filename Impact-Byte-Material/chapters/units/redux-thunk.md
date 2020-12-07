# Redux Thunk

In the [basics](react-redux.md) guide, we built a simple application and it was fully synchronous. Every time an action was dispatched, the state was updated immediately.

And how to call and asynchronous, how does asynchronicity fit into Redux flow?

Middleware extend the store's abilities, and let you write async logic that interacts with the store.

**Thunks** are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

---

## Using With React

Install Thunk

```js
yarn add redux-thunk
// or --------------------
npm install redux-thunk
```

To enable Thunk with React Redux use [applyMiddleware()](https://redux.js.org/api/applymiddleware):

inside `redux/store.js`

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));
```

create action to fetch data for API
inside `redux/action/getDataFromApi.js`

```js
import axios from "axios";

const API_URI = `https://jsonplaceholder.typicode.com/posts`;

const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

function fetchDataBegin() {
  return {
    type: FETCH_DATA_BEGIN
  };
}

function fetchDataFailed() {
  return {
    type: FETCH_DATA_FAILED
  };
}

function fetchDataSuccess(payload) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload
  };
}

export function fetchData() {
  return function(dispatch) {
    dispatch(fetchDataBegin());

    axios.get(API_URI)
    .then(result => {
        dispatch(fetchDataSuccess(result))
      })
    .catch(error => dispatch(fetchDataFailed(error)))
  };
}

// or

export const fetchData = () => { return dispatch => {
    dispatch(fetchDataBegin());

    axios.get(API_URI)
    .then(result => {
        dispatch(fetchDataSuccess(result))
      })
    .catch(error => dispatch(fetchDataFailed(error)
    ))
}}
```

create reducer to store data for API
inside `redux/reducers/index.js`

```js
const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

const initialState = {
  isLoading: false,
  isError: null,
  posts: []
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        isError: action.payload,
        isLoading: false
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    default:
      return state;
  }
};

export default postsReducer;
```

So what happens here are,
First, we initializing state to postsReducer

```js
const initialState = {
  isLoading: false,
  isError: null,
  posts: []
};
```

When we calling the `fetchData()` action

```js
export function fetchData() {
  return function(dispatch) {
    dispatch(fetchDataBegin()); // first dispatch running

    axios
      .get(API_URI)
      .then(result => {
        dispatch(fetchDataSuccess(result)); // another dispatch called
      })
      .catch(error =>
        dispatch(
          fetchDataFailed(error) // another dispatch called
        )
      );
  };
}
```

First, we try start the loading to `true` by dispatching the first an action type `FETCH_DATA_BEGIN`.

```js
// action
function fetchDataBegin() {
  return {
    type: FETCH_DATA_BEGIN
  };
}

// reducer
 case FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoading: true
      };

```

After fetching is begin, we start to call an API using axios and dispatching another action, if result is success then action type `FETCH_DATA_SUCCESS` is calling and store data to state `posts` and change state `isLoading` to `false`

```js
// action
function fetchDataSuccess(payload) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload
  };
}

// reducer
case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
```

and if fetching is failed action type `FETCH_DATA_FAILED` is calling, and set `isError` to result which is `error` and set `isLoading` back to `false`

```js
// action
function fetchDataFailed() {
  return {
    type: FETCH_DATA_FAILED
  };
}

// reducer
case FETCH_DATA_FAILED:
      return {
        ...state,
        isError: action.payload,
        isLoading: false
      };

```

---

## References

- [Stack Overflow: Dispatching Redux Actions with a Timeout
  ](http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559)
- [Stack Overflow: Why do we need middleware for async flow in Redux?
  ](http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux/34599594#34599594)
- [What the heck is a "thunk"?
  ](https://daveceddia.com/what-is-a-thunk/)
- [Thunks in Redux: The Basics
  ](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60)
