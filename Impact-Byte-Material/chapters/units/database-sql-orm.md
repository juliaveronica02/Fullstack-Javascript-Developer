# Database SQL ORM

# ORM (Object Relational Mapper)

ORM (Object Relational Mapper) is a programming technique for converting data between incompatible type systems using object-oriented programming languages.

Commonly used in database with relational table settings --such as RDBMS or SQL databases-- like MySQL, MariaDB, PostgreSQL, etc.

This way in JavaScript, we can change between table format and object format, easily.

**Table:**

```sh
| id | name
|----|-----
| 1  | "Alpha"
| 2  | "Beta"
```

**Object:**

```js
[
  {
    id: 1
    name: "Alpha"
  },
  {
    id: 2
    name: "Beta"
  }
]
```

## Libraries

There are various ORM libraries in Node.js ecosystem like Sequelize, TypeORM, waterline, Knex, Bookshelf, etc. Some platforms don't require ORM if there's a suitable SDK (Software Development Kit).

## Architecture

Usually when using an ORM, an API project will cover:

- Model that contains data schema and access the actual database
- Controller that access the model to CRUD the data
- Routes or View that access the controller

This approach is most often called MVC (Model-View-Controller).

## Getting Started

### Install Sequelize

```sh
npm install --save sequelize
```

or

```sh
yarn add sequelize
```

You'll also have to manually install the driver for your database of choice:

**One of the following:**

```sh
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```

or

```sh
$ yarn add pg pg-hstore # Postgres
$ yarn add mysql2
$ yarn add mariadb
$ yarn add sqlite3
$ yarn add tedious # Microsoft SQL Server
```

### Create Connection to Database

```js
// Require sequelize
const Sequelize = require("sequelize");

// Create database connection
const sequelize = new Sequelize(
  "DB_NAME", // Database Name
  "DB_USER", // Database Username
  "DB_PASSWORD", // Database Password
  {
    host: "localhost", // Database host
    dialect: "mysql" // Database type, one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
  }
);

// Option 2: Passing a connection URI
const sequelize = new Sequelize("mysql://user:pass@localhost:3306/dbname");
```

### Create model

```js
// Create User model
const User = sequelize.define("user", {
  username: Sequelize.STRING,
  age: Sequelize.INTEGER
});

or;

const Model = Sequelize.Model;
class User extends Model {}
User.init(
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  },
  {
    sequelize,
    modelName: "user"
    // options
  }
);
```

### Querying database

```js
// Find all users
User.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});

// Create a new user
User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
  console.log("Jane's auto-generated ID:", jane.id);
});

// Delete everyone named "Jane"
User.destroy({
  where: {
    firstName: "Jane"
  }
}).then(() => {
  console.log("Done");
});

// Change everyone without a last name to "Doe"
User.update(
  { lastName: "Doe" },
  {
    where: {
      lastName: null
    }
  }
).then(() => {
  console.log("Done");
});
```

### Example with express

```js
const express = require("express");
const Sequelize = require("sequelize");

// Initialize express
const app = express();

// Create connection
const sequelize = new Sequelize(
  "DB_NAME", // Database Name
  "DB_USER", // Database Username
  "DB_PASSWORD", // Database Password
  {
    host: "localhost", // Database host
    dialect: "mysql" // Database type
  }
);

// Create user model
const User = sequelize.define("user", {
  username: Sequelize.STRING,
  age: Sequelize.INTEGER
});

// Synchronize database
sequelize.sync().then(() => {
  // Handle GET /users request
  app.get("/users", (req, res) => {
    // Get all users
    User.findAll().then(data => {
      res.send(data);
    });
  });

  // Start server on port 8000
  app.listen(8000);
});
```

---

## References

- [Sequelize - The node.js ORM for PostgreSQL, MySQL, SQLite and MSSQL](http://docs.sequelizejs.com)
- [TypeORM - Amazing ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, WebSQL databases. Works in NodeJS, Browser, Ionic, Cordova, and Electron platforms](http://typeorm.io)
- [waterline - an adapter-based ORM for node.js](http://waterlinejs.org)
- [Knex.js - A SQL Query Builder for JavaScript](http://knexjs.org)
- [Bookshelf is a JavaScript ORM for Node.js, built on the Knex SQL query builder](http://bookshelfjs.org)
