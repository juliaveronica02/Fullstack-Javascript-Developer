## npm install
npm install express sequelize mysql2 body-parser cors jsonwebtoken bcryptjs <br>
sequelize init

## mysql
mysql -u root -p <br>
create database auth;

## models tables
### user 
sequelize model:generate --name user --attributes username:STRING,email:STRING,password:STRING <br>
sequelize db:migrate
### role
sequelize model:generate --name role --attributes name:STRING <br>
sequelize db:migrate
