## Project setup
```
npm install
```

### Run
```
node src/server.js
```
## upload photo
when upload the image save on upload folders before saving to mysql.<br>
– db.config.js exports configuring parameters for MySQL connection & Sequelize.<br>
– models/index.js: uses configuration above to initialize Sequelize, models/image.model.js for Sequelize model Image.<br>
– views/index.html: contains HTML form for user to upload images.<br>
– routes/web.js: defines routes for endpoints that is called from views, use controllers to handle requests.<br>
– controllers:<br>
home.js returns views/index.html <br>
upload.js handles upload & store images with middleware function.<br>
– middleware/upload.js: initializes Multer Storage engine and defines middleware function.<br>
– server.js: initializes routes, runs Express app.<br>

## setup nodemodules
```javascript
npm install express multer sequelize mysql2
```
package.json
```javascript
{
  "name": "upload-multiple-files-mysql",
  "version": "1.0.0",
  "description": "Node.js upload images to MySQL database",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "upload",
    "image",
    "mysql"
  ],
  "author": "bezkoder",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "multer": "^1.4.2",
    "mysql2": "^2.1.0",
    "sequelize": "^5.21.7"
  }
}
```
