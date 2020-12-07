## NOTE!
NOT A PERFECT PROJECT! JUST LEARN MODELS FILE ONLY! :)

## 3 Types of Relationships.
1. 3 models example:
   - company.
   - employee.
   - working day.

2. Employe has one company (belongsTo) 1:1.
3. Company has many employees (hasMany) 1:n.
4. Employe has many WorkingDay and WorkingDay has many employees (manyToMany) n:n.

## Express generator and sequelize CLI.
1. sudo npm install express-generator -g.
2. sudo npm install -g sequelize-cli@6.2.0 (after). (before sudo npm i -g sequelize-cli@5.5.1 )

## Generate new app.
1. express --no-view project_name.
2. cd project_name.
3. npm i sequelize mysql2.
4. sequelize init.
5. NOTE: sequelize init will create 3 folders (Models, Migrations and Seeder) and a `config.json` file in the `/config` directory.

## Modify config.
```javascript
{
  "development": {
    "username": "root", // your database username name.
    "password": "Hallo123$", // your database password.
    "database": "nodejs_relationship_demo", //your database name.
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
```
NOTE: after configuration we can run:
```javascript
`sequelize db:create` to create a new database named `nodejs_relationship_demo`
```

## Generate Table Company.
```javascript
sequelize model:generate --name Company --attributes name:STRING
```

## Generate Table User.
```javascript
sequelize model:generate --name User --attributes email:STRING,firstName:STRING,lastName:STRING,companyId:INTEGER
```

## Generate Table WorkingDay.
```javascript
sequelize model:generate --name WorkingDay --attributes weekDay:STRING,workingDate:DATE,isWorking:BOOLEAN
```

## Generate Table UserWorkingDay.
```javascript
sequelize model:generate --name UsersWorkingDay --attributes userId:INTEGER,workingDayId:INTEGER
```
* NOTE: UsersWorkingDay will be used to join User and WorkingDay (many to many relationship).

## Migrate Database.
```javascript
sequelize db:migrate
```
* NOTE: we already generated the necessary templates, we will have to indicate the relationships in the migration files by adding a reference key on all foreign keys.
* NOTE: added for each foreign key an AllowNull false to prevent creation if the model is not linked.