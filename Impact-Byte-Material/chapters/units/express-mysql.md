# Express + MySQL

Database integration using Express.js and MySQL

## Usage

- Install MySQL

  ```sh
  npm install mysql

  or

  yarn add mysql
  ```

- Create file in `config/db.js` to create database connection, and then exports the connection to your `./index.js`

  - The recommended way to establish a connection is this:

    ```js
    const mysql = require("mysql");
    const connection = mysql.createConnection({
      host: "localhost",
      user: "your_username",
      password: "your_password",
      database: "your_database"
    });

    module.exports = connection;
    ```

- Create express server in file `index.js`

  ```js
  //import all supported depedencies to your app
  const express = require("express");
  const cors = require("cors");
  const bodyParser = require("body-parser");

  // import the connection
  const connection = require("./config/db");
  // import all routes
  const userRouter = require("./app/routes/user");
  const PORT = process.env.PORT || 3001;

  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // check if connection to database is successful
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Use all routes after declaring connection
  app.get("/", function(req, res) {
    res.send("hello world");
  });
  app.use("/user", userRouter);

  // listen to server
  app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
  );
  ```

- In your controller file `controllers/index.js` import `db.js` to start using SQL query

  ```js
  const connection = require('./config/db.js')

  module.exports = {
      getAll = (req, res) => {
          connection.query(`SELECT * from users`, (error, results, fields) => {
          if(error){
          res.status(500).send({
          message: 'error when try to get users, check your connection to database',
          error
          })
          } else {
              res.send({
                  message: `Users`,
                  results
              })
          }
      })
  }
  },

  // .... ///

  ```

On above code, we called `connection.query()` which is to handle our SQL.

---

## Performing Queries

The most basic way to perform a query is to call the`.query()` method on an object.

The simplest form of`.query()` is `.query(sqlString, callback)`, where a SQL string is the first argument and the second is a callback:

```js
connection.query('SELECT * FROM `users` WHERE`name` = "Gushef"', function(
  error,
  results,
  fields
) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about thereturned results fields (if any)
});
```

The second form `.query(sqlString, values, callback)` comes when using placeholder values

```js
connection.query(
  "SELECT * FROM `users` WHERE `name` = ?",
  ["Gushef"], // define your condition value here
  function(error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  }
);
```

If the query only has a single replacement character (?), and the value is not null, undefined, or an array, it can be passed directly as the second argument to .query:

```js
connection.query("SELECT * FROM `users` WHERE`name` = ?", "Gushef", function(
  error,
  results,
  fields
) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
});
```

---

## References

- [MySQL | NPM](https://www.npmjs.com/package/mysql)
- [Database Integration | Express](https://expressjs.com/en/guide/database-integration.html#mysql)
