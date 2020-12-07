## STEP BY STEP.
* login to cpanel.
* go to mysql database wizard.
* create database - click next.
* set username, password, confirm password and create user.
* check list all privillege users - done.
* goto cpanel - phpmyadmin.
* create table on database we create at mysql database wizard.
* generate file: express --no-view folder_name.
* npm i.
* install dependency can see from package.json.
* sequelize init.
* change config.
* config.js:
```javascript
  "username": "u6745542_Pendaftaran", // must match with database username at cpanel.
    "password": "qwerty123", // must match with database password at cpanel when we create.
    "database": "u6745542_pendaftaran", // database name at cpanel.
    "host": "pabryk.com", // if can't connect to phpmyadmin at cpanel, we can use domain or use this ip address "%.%.%.%" sso that all ip can be accessed.
    "dialect": "mysql", 
    "logging": false,
    "port": 3306, // mysql port always 3306.
    "operatorsAliases": "false" // always set string.
```
* open heroku.
* type "heroku login" on vscode terminal.
* git init.
* git add .
* git commit -am "up to you".
* heroku git:remote -a pabryk.
* git push heroku master.
* endpoint heroku:
  - https://pabryk.herokuapp.com/users/register
  - https://pabryk.herokuapp.com/users/login
  - https://pabryk.herokuapp.com/users/show