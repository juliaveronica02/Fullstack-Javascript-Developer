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
  - https://pabryk.herokuapp.com
* routes: see on app.js and routes folder.

## Setup banner using multer and sharp!
* npm install express multer sharp (option 1, RECOMMEND!).
* npm install express multer multer-sharp-resizer (option 2).
* multer:we can upload multiple images.
* sharp: resizing images.
* multer-sharp-resizer: resize one image or multiple images to multiple sizes with node.js, express.js, multer,js and sharp.js.
* banner size: 250 x 130px and 250 x 400px.

## ENDPOINT! (https://pabryk.herokuapp.com)
1. /users
   * /register: username, email, password, passwordConfirm, phone, ttl, gender, role, kota and productInterest.
     - Note: password must match with passwordConfirm. role varchar so at frontend specify Member or Produsen with capital. Kota also varchar. productInterest using text because we can't predict how long the user typing.
   * /login: email and password (token exp 1 hours).
   * /show: show user data (id, username, email and username).
   * /show/:userId: /show/1 (show user with id = 1).
   * /logout: message 200: Logout successfully!.
   * /update/:id: email, username, phone and kota.
     - Note: when update user must enter email and password to update profile.
     - message: 
        1. 200: Profile Updated!.
        2. 417: Please specify password field and email!.
        3. 404: User Not Found!.
        4. 401: Please specify User ID!.
   * /delete/:id: delete/1.
   * /login2: username/phone and password (user can login with username or phone)
     message:
     1. 404 (emailOrPhoneNotFound: "Email or Phone not found!")
     2. 400 (passwordincorrect: "Password incorrect!")
     3. success (200)
   * /resetPassword/:id: password, newPassword, passwordConfirm.
   * /delete-user/:id: password.
     - Note: must write password before delete account.
   * /update/:userId: email, username, phone and kota. 
2. /admin:
   * /register: username, email, password, passwordConfirm and phone.
   * /login: email and password.
   * /show: id, username, email and phone.
   * /logout.

3. /berita:
   * /create: title, imageURL, description, written, email.
   * /show
   * /edit/:beritaId: /edit/1
   * /delete/:beritaId: /delete/1

4. /email:
   * /create: email
   * /show: email

5. /banner130:
   * /create: images
   * /show

6. /banner400:
   * /create: images
   * /show

## Cpanel DATABASE PHPMYADMIN.
* go to cpanel.
* go to databases.
* choose phpmyadmin.
* create database.
* press import button.
* choose file: u6745542_pendaftaran.sql.