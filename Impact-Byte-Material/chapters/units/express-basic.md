# Express Basic

## Intorduction

### NodeJS

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.

```js
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

### References 
- [Documentation NodeJS](https://nodejs.org/docs/latest-v11.x/api/)

## NodeJS Framework

[Express](https://expressjs.com) is a Node.js web framework. It's described as a fast, unopinionated, minimalist web framework for Node.js platform.

Express builds on top of its features to provide easy to use functionality that satisfy the needs of the Web Server use case.

It’s Open Source, free, easy to extend, very performant, and has lots and lots of pre-built packages you can just drop in and use, to perform all kind of things

---

## REST API Architecture

A REST API server would sometimes be called "Web Services" or just "Services".

While how we access the REST API are through the "Routes" or "Endpoints"

We must have a base URL such as `localhost:3000` or `api.github.com`

| Route/Endpoint | HTTP     | Description                  |
| -------------- | -------- | ---------------------------- |
| `/items`       | `GET`    | Get all the items            |
| `/items/:id`   | `GET`    | Get a single item            |
| `/items`       | `POST`   | Save an item                 |
| `/items`       | `DELETE` | Remove all the items         |
| `/items/:id`   | `DELETE` | Remove an item               |
| `/items/:id`   | `PUT`    | Update an item with new info |

### `GET localhost:3000/items`

```json
// response.body
{
  "data": [
    {
      "id": 1,
      "name": "AAA Battery"
    },
    {
      "id": 2,
      "name": "Black Box"
    }
  ]
}
```

### `GET localhost:3000/items/1`

```json
// response.body
{
  "data": {
    "id": 1,
    "name": "AAA Battery"
  }
}
```

### `POST localhost:3000/items`

```json
// request.body
{
  "name": "Creamy Ice Cream"
}
```

```json
// response.body
{
  "message": "New item has been added",
  "data": {
    "id": 3,
    "name": "Creamy Ice Cream"
  }
}
```

### `PUT localhost:3000/items/2`

```json
// request.body
{
  "id": 2,
  "name": "Blue Balloon"
}
```

```json
// response.body
{
  "message": "Existing item has been updated",
  "data": {
    "id": 2,
    "name": "Blue Balloon"
  }
}
```

### `DELETE localhost:3000/items/1`

```json
{
  "message": "Item with id 1 has been deleted",
  "data": {
    "id": 1,
    "name": "AAA Battery"
  }
}
```

### `DELETE localhost:3000/items`

```json
{
  "message": "All items have been deleted"
}
```

---

## Express Structure

```sh
yarn init
yarn add express
```

To maintain our Express app, we can either use:

### Single `index.js`

```sh
.
├── README.md
├── index.js
└── package.json
```

### Multiple Folders and Files

```sh
.
├── README.md
├── app.js
├── index.js
├── package.json
├── data
│   ├── config.json
│   └── users.json
└── routes
    ├── index.js
    └── users.js
```

---

## Express `index.js`

**Endpoints**

| Endpoint | HTTP  | Description              |
| -------- | ----- | ------------------------ |
| `/`      | `GET` | Show welcome message     |
| `/hello` | `GET` | Show hello world message |

**index.js**

```js
const express = require("express"); // import express library
const app = express(); // initialize express app

// setup a `/` endpoint
app.get("/", (req, res, next) => res.send("Welcome!"));

// setup a `/hello` endpoint
app.get("/hello", (request, response, next) => {
  response.send({
    message: "Hello world!"
  });
});

// setup server to listen on port :3000
app.listen(3000, () =>
  console.log("Express server is ready on localhost:3000")
);
```

**Run the app:**

```sh
node index.js
```

We can open the browser to port `:3000` on `localhost`, so it's `localhost:3000`, then we should see the `"Welcome!"` message.

```json
Welcome!
```

Then if you open `localhost:3000/hello`, we should see the `"Hello World!"` message object.

```json
{
  "message": "Hello world!"
}
```

We can also open them on Postman, using the same endpoints.

**Run the app with auto reload:**

```sh
nodemon index.js
```

or

```sh
yarn add --dev nodemon
# add "nodemon index.js" into "dev" script in package.json
yarn dev
```

---

## Express Routing

There is a method for every important HTTP verb: `get()`, `post()`, `put()`, `delete()`, `patch()`:

```js
app.get("/", (req, res) => console.log("GET"));
app.get("/:id", (req, res) => console.log("GET ONE"));
app.post("/", (req, res) => console.log("POST"));
app.put("/", (req, res) => console.log("UPDATE"));
app.put("/:id", (req, res) => console.log("UPDATE ONE"));
app.delete("/", (req, res) => console.log("DELETE"));
app.delete("/:id", (req, res) => console.log("DELETE ONE"));
app.patch("/", (req, res) => console.log("PATCH"));
app.patch("/:id", (req, res) => console.log("PATCH ONE"));
```

Those methods accept a callback function, which is called when a request is started, and we need to handle it.

We pass in a function in one line:

```js
app.get("/", (req, res) => res.send("Hello world!"));
```

In a function scope:

```js
app.get("/", (req, res) => {
  res.send("Hello world!");
});
```

The `.json()` method accepts an object or array, and converts it to JSON before sending it:

```js
app.get("/users/:id", (req, res) => {
  res.json({ username: "alphavalon" });
});
```

Express sends us two objects in this callback, which we called req and res, that represent the Request and the Response objects.

Request is the HTTP request. It can give us all the info about that, including the request parameters, the headers, the body of the request, and more.

Response is the HTTP response object that we’ll send to the client

---

## Request Properties

These are the main request properties you’ll likely use:

| Property         | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| `.app`           | holds a reference to the Express app object                                   |
| `.baseUrl`       | the base path on which the app responds                                       |
| `.body`          | contains the data submitted in the request body                               |
| `.cookies`       | contains the cookies sent by the request (middleware: `cookie-parser`)        |
| `.hostname`      | the hostname as defined in the Host HTTP header value                         |
| `.ip`            | the client IP                                                                 |
| `.method`        | the HTTP method used                                                          |
| `.params`        | the route named parameters                                                    |
| `.path`          | the URL path                                                                  |
| `.protocol`      | the request protocol                                                          |
| `.query`         | an object containing all the query strings used in the request                |
| `.secure`        | true if the request is secure (uses HTTPS)                                    |
| `.signedCookies` | contains the signed cookies sent by the request (middleware: `cookie-parser`) |
| `.xhr`           | `true` if the request is an `XMLHttpRequest`                                  |

---

## Response Properties

`res.send('Hello World!')`

If you pass in a string, it sets the `Content-Type` header to `text/html`.

if you pass in an object or an array, it sets the `application/json` `Content-Type` header, and parses that parameter into JSON.

`.send()` automatically sets the Content-Length HTTP response header and also automatically closes the connection.

`.end()` is used to send an empty response.

### Set the HTTP `response` status

Use the `.status()`:

```js
res.status(200).send({ message: "Success!" });
```

```js
res.status(404).end();
```

or

```js
res.status(404).send("File not found");
```

`sendStatus()` is a shortcut:

```js
res.sendStatus(200);
// === res.status(200).send('OK')

res.sendStatus(403);
// === res.status(403).send('Forbidden')

res.sendStatus(404);
// === res.status(404).send('Not Found')

res.sendStatus(500);
// === res.status(500).send('Internal Server Error')
```

### Handling redirects

Redirects are common in Web Development. You can create a redirect using the `.redirect()` method:

```js
res.redirect("/go-there");
```

This creates a `302` redirect.

A `301` redirect is made in this way:

```js
res.redirect(301, "/go-there");
```

You can specify an absolute path (`/go-there`), an absolute url (`https://anothersite.com`), a relative path (`go-there)`, or use the `..` to go back one level:

```js
res.redirect("../go-there");
res.redirect("..");
```

You can also redirect back to the Referer HTTP header value (defaulting to `/` if not set) using:

```js
res.redirect("back");
```

### Send a file to be downloaded

The `.download()` method allows you to send a file attached to the request, and the browser instead of showing it in the page, it will save it to disk.

```js
res.download("/file.pdf");
```

```js
res.download("/file.pdf", "user-facing-filename.pdf");
```

### Named parameters

What if we want to listen for custom requests, maybe we want to create a service that accepts a string, and returns that uppercase, and we don’t want the parameter to be sent as a query string, but part of the URL. We use named parameters:

```js
app.get("/items/:id", (req, res) => {
  res.send({
    id: req.params.id
  });
});
```

You can use multiple named parameters in the same URL, and they will all be stored in `req.params`.

---

## Express Middlewares

Note that before, the `(req, res) => res.send('Welcome!')` part is being a simple middleware function. Although it just response a string directly.

A middleware is a function that hooks into the routing process, and performs some operation at some point, depending on what it want to do.

It’s commonly used to edit the request or response objects, or terminate the request before it reaches the route handler code.

There are a lot of middlewares or plugins we can use in Express:

- Express Body Parser
- Express Cookie Parser
- Express Validator
- Express JWT
- Express Passport.js for Authentication

Middleware can also be added to the execution stack with `app.use()`:

```js
app.use((req, res, next) => {
  /* */
});
```

This is similar to defining a route, but in addition to the Request and Response objects instances, we also have a reference to the next middleware function, which we assign to the variable next.

We always call `next()` at the end of our middleware function, to pass the execution to the next handler, unless we want to prematurely end the response, and send it back to the client.

You typically use pre-made middleware, in the form of `npm` packages.

One example is `cookie-parser`, which is used to parse the cookies into the `req.cookies` object. You install it using `yarn add cookie-parser` and you can use it like this:

```js
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.get("/", (req, res) => res.send("Hello World!"));

app.use(cookieParser());
app.listen(3000, () => console.log("Ready on localhost:3000"));
```

You can also set a middleware function to run for specific routes only, not for all, by using it as the second parameter of the route definition:

```js
const customMiddleware = (req, res, next) => {
  // do something here
  next();
  // but there is no res.send()
};

app.get("/", customMiddleware, (req, res) => res.send("Hello World!"));
```

If you need to store data that’s generated in a middleware to pass it down to subsequent middleware functions, or to the request handler, you can use the `Request.locals` object. It will attach that data to the current request:

```js
const customMiddleware = (req, res, next) => {
  req.locals.name = "Alpha Avalon";
  next();
};
```

### Serving static assets

It’s common to have assets such as images and videos in a `public` subfolder, and expose them to the root level:

```js
const express = require("express");
const app = express();

app.use(express.static("public"));

/* ... */

app.listen(3000, () => console.log("Server ready"));
```

If you have an `index.html` file in `public/`, that will be served if you now hit the root domain URL (`http://localhost:3000`)

---

## Express Templating

Express is capable of handling server-side templates. Jade is the default template engine, but you can use many different template ones, including Pug, Mustache, EJS and more.

It looks like this:

```js
const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("view engine", "hbs");

app.get("/about", (req, res) => {
  res.render("about", { name: "Flavio" });
});

app.listen(3000, () => console.log("Server ready"));
```

For now, ignore templating and don't use it in Express. Becuz' we already have React as a standalone SPA!

### React in Express

For experiment, we can also render a React application server-side, using the `express-react-views` package.

```sh
yarn add express-react-views react react-dom
```

Now we require `express-react-views` and use that as the engine, using `jsx` files:

```jsx
const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/about", (req, res) => {
  res.render("about", { name: "Flavio" });
});

app.listen(3000, () => console.log("Server ready"));
```

Just put an `about.jsx` file in `views/`, and calling `/about` should present you an "Hello from Express" string:

```js
const React = require("react");

class HelloMessage extends React.Component {
  render() {
    return <div>Hello from {this.props.name}</div>;
  }
}

module.exports = HelloMessage;
```

---

## Express Generator

We can use [Express application generator](https://expressjs.com/en/starter/generator.html) to setup our app faster.

```sh
yarn global add express-generator
or
npm install -g express-generator

express -h
```

```sh
mkdir project-express
cd project-express
express --no-view
```

Project structure:

```sh
.
├── LICENSE
├── README.md
├── app.js
├── bin
│   └── www # JavaScript file
├── package.json
├── public # will be removed
│   ├── images
│   ├── index.html
│   ├── javascripts
│   └── stylesheets
└── routes
    ├── index.js
    └── users.js
```

We can restructure them a bit so it will be like:

```sh
.
├── LICENSE
├── README.md
├── app.js
├── index.js
├── package.json
└── routes
    ├── index.js # from bin/www
    └── users.js
```

Just four JavaScript files needed.

### `package.json

```json
{
  "name": "project-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "morgan": "~1.9.0"
  },
  "devDependencies": {
    "nodemon": "1.18.11"
  }
}
```

### `index.js`

```js
#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require("./app");
const debug = require("debug")("project-express:server");
const http = require("http");

/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

/**
 * Event listener for HTTP server "error" event.
 */

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
};

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || "3000");

app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`);
});
server.on("error", onError);
server.on("listening", onListening);
```

### `app.js`

```js
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
```

### `routes/index.js`

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({
    title: "Express"
  });
});

module.exports = router;
```

### `routes/users.js`

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send({
    data: []
  });
});

module.exports = router;
```

### `yarn dev`

```sh
yarn add --dev nodemon
```

Add `nodemon index.js` into `dev` script in `package.json`:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

```
yarn dev
```

---

Express has all the power of Node.js under the hoods. We can do anything that you want now, including connecting to a database, and everything you can imagine doing on a server.

## Express Basic References

- [Express](https://expressjs.com)
  - [Installing Express](https://expressjs.com/en/starter/installing.html)
  - [Express "Hello World" example](https://expressjs.com/en/starter/hello-world.html)
  - [Express application generator](https://expressjs.com/en/starter/generator.html)
  - [Express basic routing](https://expressjs.com/en/starter/basic-routing.html)
  - [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)
- [Introduction to Express, a practical tutorial](https://flaviocopes.com/express)
  - [The Express.js Handbook by Flavio Copes (PDF)](https://drive.google.com/open?id=1aact9oGi51WNTxU-fwOyjc7B5Rq5H6Un) 📖
- [`impactbyte-learn/module-expressjs`](https://github.com/impactbyte-learn/module-expressjs)
  - [`impactbyte-learn/code-expressjs`](https://github.com/impactbyte-learn/code-expressjs)
