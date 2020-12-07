# React Router

In React, we commonly have a single page website or application, with multiple components inside it.

But what if we need to have multiple pages, then navigate between them? What if we need to change the page after a certain action? How to handle back and forward in a React application?

Router is is a way to handle **routes**, **paths**, or **pages**.

React Router is a router designed specifically for React app, in React web and in React Native.

Of course you’ll need an existing React web app to add React Router.

---

## React Router DOM

```sh
yarn add react-router-dom
```

```jsx
import { BrowserRouter, Route, Link } from 'react-router-dom';
```

### Basic Routing

In this example we have 3 'Page' Components handled by the `<Router>`. Note that instead of `<a href="/">` we use `<Link to="/">`.

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
```

### Nested Routing

This example shows how nested routing works. The route `/topics` loads the `Topics` component, which renders any further `<Route>`'s conditionally on the paths `:id` value.

```jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/topics'>Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/topics'>
            <Topics />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}
```

Happy routing!

### Project Structure

The recommended project structure would look like this:

```sh
src
├── components
│   ├── Footer.js
│   └── Header.js
├── pages
│   ├── About.js
│   ├── Home.js
│   ├── Login.js
│   ├── Page.js
│   ├── Profile.js
│   ├── Register.js
│   ├── Topic.js
│   └── Topics.js
```

### `Switch` + `Route`

```jsx
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
```

```jsx
<Router>
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/dashboard'>
      <Dashboard />
    </Route>
    <Route path='/about' render={() => <div>About</div>} />
  </Switch>
</Router>
```

---

## React Router References

### Officials

- [React Router: Declarative Routing for React.js](https://reacttraining.com/react-router)
  - [React Router: Declarative Routing for React.js](https://reacttraining.com/react-router/web/guides/quick-start)
    - [`react-router/quick-start.md`](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/quick-start.md)
  - [`react-router` on GitHub](https://github.com/ReactTraining/react-router)
  - [`react-router-dom` on npm](https://www.npmjs.com/package/react-router-dom)
- [URL Encoded](https://www.w3schools.com/tags/ref_urlencode.asp)