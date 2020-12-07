# React Environment

Most of the time, if we have a _secret credentials_, we DON'T want it to be committed into the repo. JUST DON'T. NEVER. PLEASE :)

By default, `react-scripts` in `create-react-app` support environment variable through `.env` file. The same with what's supported in Node.js, via `process.env` object.

We can define such `REACT_APP_VARIABLE` in the `.env` file, then access it as `process.env.REACT_APP_VARIABLE`.

```sh
REACT_APP_VARIABLE=example
REACT_APP_NAME=impactodo
REACT_APP_API_URL=http://localhost:3000
```

```js
const VARIABLE = process.env.REACT_APP_VARIABLE
const NAME = process.env.REACT_APP_NAME
const API_URL = process.env.REACT_APP_API_URL
```

Yes, you need prepend them with the `REACT_APP_` prefix in order to make it work in `react-scripts`. If you have a custom build solution other than `create-react-app`, then the `REACT_APP_` naming convention is not needed.

This will help a lot if you want to deploy the app into production environment like Netlify, Heroku, your own VPS, or cloud computing solution. Go to the respected environment variable configuration settings based on those platforms.

In short, in a React project, we have a file that is ignored by Git:

```sh
.env
```

```sh
REACT_APP_VARIABLE_NAME='you_name_it'
REACT_APP_API_URL=http://localhost:3000
```

```jsx
const VARIABLE_NAME = process.env.REACT_APP_VARIABLE_NAME
```

In Netlify, we can set it up in the Build Settings:

```sh
REACT_APP_VARIABLE_NAME = 'you_name_it'
```

```jsx
const VARIABLE_NAME = process.env.REACT_APP_VARIABLE_NAME
```

---

## React Environment References

- [Adding Custom Environment Variables · Create React App](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables)
- [Environments in Create React App | Serverless Stack](https://serverless-stack.com/chapters/environments-in-create-react-app.html)
- [Build Settings | Netlify](https://www.netlify.com/docs/build-settings)
