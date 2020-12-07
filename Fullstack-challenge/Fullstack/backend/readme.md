## mysql
mysql -u root -p <br>
password: Hallo123$
## Create Resto Databases
CREATE DATABASE IF NOT EXISTS resto; <br>
## use resto database
USE resto; <br>
## drop table menu on resto if exists
DROP TABLE IF EXISTS menu; <br>
## create table
CREATE TABLE menu( id int(11) NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, price varchar(128) NOT NULL, description varchar(60000), image varchar(255) NOT NULL, createdAt datetime NOT NULL, updatedAt datetime NOT NULL, PRIMARY KEY (id) );
## show menu list
desc menu;
## extract database to visual code
sequelize init <br>
## config
```javascript
{
  "development": {
    "username": "root",
    "password": "Hallo123$",
    "database": "resto",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": "false"
  },
```
## extract table from database to visual code
sequelize db:migrate
## mysql commands
select * from menu; : for show all data from a table. <br>
create database databasename; : for create database. <br>
show databases; : for List all databases on the server. <br>
use db name; : for Switch to a database. <br>
show tables; : for To see all the tables in the db. <br>
describe tableName;/ desc tableName; : for To see table's field formats. <br>
drop database [database name]; : for To delete a db. <br>
drop table [table name]; : for To delete a table. <br>
SELECT * FROM [table name]; : for Show all data from a table. <br>
show columns from [table name]; : for To return columns and column information. <br>