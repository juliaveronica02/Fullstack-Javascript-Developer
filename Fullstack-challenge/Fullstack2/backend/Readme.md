## Npm 
npm i sequelize@5.21.7 <br>
npm i mysql2@2.1.0 <br>
sudo npm i -g sequelize-cli@5.5.1 (because install in global so use "sudo") <br>

## Sequelize-cli commands

| sequelize db:migrate                       | Run pending migrations                                      |                             |
|--------------------------------------------|-------------------------------------------------------------|-----------------------------|
| sequelize db:migrate:schema:timestamps:add | Update migration table to have timestamps                   |                             |
| sequelize db:migrate:status                | List the status of all migrations                           |                             |
| sequelize db:migrate:undo                  | Reverts a migration                                         |                             |
| sequelize db:migrate:undo:all              | Revert all migrations ran                                   |                             |
| sequelize db:seed                          | Run specified seeder                                        |                             |
| sequelize db:seed:undo                     | Deletes data from the database                              |                             |
| sequelize db:seed:all                      | Run every seeder                                            |                             |
| sequelize db:seed:undo:all                 | Deletes data from the database                              |                             |
| sequelize db:create                        | Create database specified by configuration                  |                             |
| sequelize db:drop                          | Drop database specified by configuration                    |                             |
| sequelize init                             | Initializes project                                         |                             |
| sequelize init:config                      | Initializes configuration                                   |                             |
| sequelize init:migrations                  | Initializes migrations                                      |                             |
| sequelize init:models                      | Initializes models                                          |                             |
| sequelize init:seeders                     | Initializes seeders                                         |                             |
| sequelize migration:generate               | Generates a new migration file                              | [aliases: migration:create] |
| sequelize model:generate                   | Generates a model and its migration [aliases: model:create] |                             |
| sequelize seed:generate                    | Generates a new seed file                                   | [aliases: seed:create]      |

## after install sequelize globally run below commands
sequelize init
## create database
mysql -u root -p <br>
enter database password: Hallo123$ <br>
create database fullstack <br>
## Install depedency
npm i or npm install
## install other depedency
npm install body-parser cors sequelize mysql2 sequelize-cli
## Initialize sequelize project
sequelize init
## Change config file on config.json
```javascript
{
  "development": {
    "username": "root",
    "password": "Hallo123$",
    "database": "fullstack",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": "false"
  },
  ```
## NPM install
npm i bcrypt jsonwebtoken dotenv validator is-empty
## Remove Existing Git
rm -rf .git
## User Schema
sequelize model:generate --name User --attributes username:STRING,image:STRING,email:STRING,phone:INTEGER,password:STRING <br>
sequelize db:migrate <br>
ALTER TABLE Users ADD COLUMN image VARCHAR(2000) AFTER username;

## testing postman
1. if register using form data.
```javascript
{
    "id": 2,
    "username": "Admin",
    "image": "public/images/2020-06-29T09:29:10.333Zkirito.jpg",
    "email": "admin@gmail.com",
    "phone": "0853636112",
    "password": "$2a$12$IXChhbrWuVjyOtxe0azqge7ZbYkf9q5pLkYoDrVPYivR2imCDBdFy",
    "role": "Admin",
    "updatedAt": "2020-06-29T09:29:10.941Z",
    "createdAt": "2020-06-29T09:29:10.941Z"
}
```
2. if login using x-www-form.
```javascript
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJBZG1pbiIsImlhdCI6MTU5MzQyMjk5NywiZXhwIjoxNTkzNDI2NTk3fQ.NBctFFxM2atT2khfJN8Fci0jPGS44emWot8ep5_XA_Q",
    "id": 2,
    "role": "Admin"
}
```