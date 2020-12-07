# Sequelize Migration

# Database Migration

## Problem

- Not knowing specific data from website we build.
  Planning database schema is a headache. So we had to scraping, doing a research that which could result inconsitent, incomplete difference data types and so forth and we have to change the schema over and over.

- Have to add data or change column to schema.
  Sometimes we don't have fully understand of what data do we need and what it should look like.
  Using db.sync({force: true}) we have to manually re-enter data that we spent a lot of time putting into the database.

These specific problems that database migration can help to solve. Migrations allows you to **RECORD** modifications and undo them if need be.

## Sequelize Migration

### sequelize/cli

The Sequelize Command Line Interface (CLI)

## Installation

### Globally

Install CLI globally with

```bash
npm install -g sequelize-cli
or
yarn global add sequelize-cli
```

Now you can run CLI using following command anywhere

```bash
sequelize
```

### Locally

Install CLI locally to your `node_modules` folder with

```bash
npm install --save sequelize-cli
or
yarn add sequelize-cli
```

You should be able to run CLI with

```bash
node_modules/.bin/sequelize

# or

npx sequelize-cli <option>
```

## Getting Started

Let create our first sequelize migration

```bash
npx sequelize init

npx sequlize db:create
# if your database isn't created yet
```

This will create following folders

```bash
|-- config
    |-- config.json
|-- migrations
|-- models
    |-- index.js
|-- seeders
```

### Configuration

Before continuing further we will need to tell CLI how to connect to database. To do that let's open default config file config/config.json. It looks something like this

```js
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

// change to database.js

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DATABASE_USERNAME_PROD,
    password: process.env.DATABASE_PASSWORD_PROD,
    database: process.env.DATABASE_PROD,
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};
```

### Creating first Model (and Migration)

```sh
npx sequelize model:migrate --name first-model --attribute name:string
```

This will do following

- Create a model file first-model in models folder
- Create a migration file with name like XXXXXXXXXXXXXX-create-first-model.js in migrations folder

### Running Migrations

Until this step, we haven't inserted anything into the database. We have just created required model and migration files for our first model User. Now to actually create that table in database you need to run db:migrate command.

```sh
npx sequelize db:migrate
```

This command will execute these steps:

- Will ensure a table called SequelizeMeta in database. This table is used to record which migrations have run on the current database
- Start looking for any migration files which haven't run yet. This is possible by checking SequelizeMeta table. In this case it will run XXXXXXXXXXXXXX-create-user.js migration, which we created in last step.
- Creates a table called Users with all columns as specified in its migration file

### Undoing Migrations

Now our table has been created and saved in database. With migration you can revert to old state by just running a command.

- You can use db:migrate:undo, this command will revert most recent migration.

```sh
npx sequelize db:migrate:undo
```

- You can revert back to initial state by undoing all migrations with db:migrate:undo:all command. You can also revert back to a specific migration by passing its name in --to option.

```sh
npx sequelize db:migrate:undo:all --name XXXXXXXXXXXXXX-create-first-model.js
```

### Creating First Seed

Suppose we want to insert some data into a few tables by default. If we follow up on previous example we can consider creating a demo first-model for first-model table.

To manage all data migrations you can use seeders. Seed files are some change in data that can be used to populate database table with sample data or test data.

Let's create a seed file which will add a demo first-model to our first-model table.

```sh
npx sequelize-cli seed:generate --name demo-first-model
```

This command will create a seed file in seeders folder. File name will look something like XXXXXXXXXXXXXX-demo-first-model.js. It follows the same up / down semantics as the migration files.

Now we should edit this file to insert demo user to first-model table.

```js
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'first-model',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'demo@demo.com'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('first-nmodel', null, {});
  }
};
```

### Running Seeds

In last step you have create a seed file. It's still not committed to database. To do that we need to run a simple command.

```sh
npx sequelize-cli db:seed:all
```

This will execute that seed file and you will have a demo user inserted into first-model table.

### Undoing Seeds

Seeders can be undone if they are using any storage. There are two commands available for that:

If you wish to undo most recent seed

```sh
npx sequelize-cli db:seed:undo
```

If you wish to undo a specific seed

```sh
equelize db:seed:undo --seed name-of-seed-as-in-data
```

If you wish to undo all seeds

```sh
npx sequelize-cli db:seed:undo:all
```

---

## References

- [Migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html)
