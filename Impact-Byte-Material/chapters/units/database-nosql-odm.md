# Database NoSQL ODM

---

## ODM (Object Data Mapper)

ODM (Object Document Mapper) are libraries to ease the use of managing NoSQL databases through various programming languages.

Examples:

- [Mongoose - elegant mongodb object modeling for node.js](http://mongoosejs.com)
  - [Mongoose v5.7.2 Documentation](http://mongoosejs.com/docs/guide.html)
- [Mongorito - MongoDB ODM for Node.js based on ES6 generators](http://mongorito.com)
- [TypeORM - MongoDB Support](http://typeorm.io/#/mongodb)

---

## CORS

[CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application executes a **cross-origin HTTP request** when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.

[`cors`](https://www.npmjs.com/package/cors) is a Node.js package for providing a Express middleware that can be used to enable CORS with various options.

```sh
yarn add cors
```

```js
const express = require('express')
const app = express()
const cors = require('cors')

const port = 8000

app.use(cors())

app.get('/', (req, res, next) => {
  res.send({ message: 'This is CORS-enabled for all origins!' })
})

app.listen(port, function() {
  console.log(`CORS-enabled web server listening on localhost:${port}`)
})
```

---

## Mongoose

[Mongoose](http://mongoosejs.com) is a MongoDB object modeling tool designed to work in an asynchronous environment.

### Connect Node.js and Mongoose

```sh
yarn add dotenv mongoose
```

**`.env`**:

```txt
MONGODB_URI=mongodb://localhost:27017/project-express-mongodb
```

**`index.js`**:

```js
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Cat = mongoose.model('Cat', {
  name: String
})

const kitty = new Cat({
  name: 'Goose'
})

kitty.save().then(() => console.log('Meow'))
```

```js
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const storySchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  comments: [
    {
      body: String,
      date: Date
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
})
```

```js
const mongoose = require('mongoose')
const dbConnection = mongoose.createConnection(process.env.MONGODB_URI)

const postSchema = new mongoose.Schema({
  title: String,
  text: String
})

const Post = dbConnection.model('Post', postSchema, 'posts')

Post.find({}, function(error, posts) {
  res.send(posts)
})
```

### Schema Types

- `String`
- `Boolean`
- `Number`
- `Date`
- `Array`
- `Buffer`
- `Schema.Types.Mixed`
- `Schema.Types.ObjectId`

### CRUD Examples

```js
// -----------------------------------------------------------------------------
// Create
const post = new Post({ title: 'a', text: 'b' })

post.save((error, document) => {
  // ...
})

// -----------------------------------------------------------------------------
// Read
Post.findOne(criteria, (error, post) => {
  // ...
})

// -----------------------------------------------------------------------------
// Delete
Post.findOne(criteria, (error, post) => {
  post.remove(error => {
    // ...
  })
})

// -----------------------------------------------------------------------------
// Update
Post.findOne(criteria, (error, post) => {
  post.set()
  post.save(function(error, document) {
    // ...
  })
})
```

### Mongoose Model Methods

- `find(criteria, [fields], [options], [callback])`: find document; callback has error and documents arguments
- `count(criteria, [callback]))`: return a count; callback has error and count arguments
- `findById(id, [fields], [options], [callback])`: return a single document by ID; callback has error and document arguments
- `findByIdAndUpdate(id, [update], [options], [callback])`: executes MongoDB's findAndModify to update by ID
- `findByIdAndRemove(id, [options], [callback])`: executes MongoDB's findAndModify to remove
- `findOne(criteria, [fields], [options], [callback])`: return a single document; callback has error and document arguments
- `findOneAndUpdate([criteria], [update], [options], [callback])`: executes MongoDB's findAndModify to update
- `findOneAndRemove(id, [update], [options], [callback])`: executes MongoDB's findAndModify to remove
- `update(criteria, update, [options], [callback])`: update documents; callback has error, and count arguments
- `create(doc(s), [callback])`: create document object and save it to database; callback has error and doc(s) arguments
- `remove(criteria, [callback])`: remove documents; callback has error argument

### Mongoose Document Methods

- `save([callback])`: save the document; callback has error, doc and count arguments
- `set(path, val, [type], [options])`: set value on the doc's property
- `get(path, [type])`: get the value
- `isModified([path])`: check if the property has been modified
- `populate([path], [callback])`: populate reference
- `toJSON(options)`: get JSON from document
- `validate(callback)`: validate the document

### Connect Node.js, Express, and Mongoose

**`configs/mongoose`**

```js
require('dotenv').config()

const mongoose = require('mongoose')

const MONGODB_CONNECTION =
  process.env.MONGODB_URI ||
  `${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}` ||
  `mongodb://localhost:27017/database_name`

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_CONNECTION, {
  useNewUrlParser: true
})

module.exports = mongoose
```

**`routes/users/model.js`**

```js
const mongoose = require('../../configs/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

// Schema of User
const UserSchema = mongoose.Schema(
  {
    name: String,
    username: String,
    email: String,
    phone: String,
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
      }
    ]
  },
  {
    timestamps: true
    // createdAt
    // updatedAt
  }
)

// plug the AutoIncrement plugin into the schema to create auto incremented id
// id is different with _id
// inc_field is to track which id to increment
UserSchema.plugin(AutoIncrement, {
  id: 'users_counter',
  inc_field: 'id'
})

// User model => users collection
const User = mongoose.model('User', UserSchema)

module.exports = User
```

**`routes/users/middleware.js`**

```js
const usersMiddleware = {
  // ---------------------------------------------------------------------------
  // Get all users
  get: async (req, res, next) => {
    const usersData = await usersModel.find()

    usersData
      ? res.send({
          message: 'Get all users',
          data: usersData
        })
      : res.status(404).send({
          message: 'Get all users failed'
        })
  },

  // ---------------------------------------------------------------------------
  // Get one user by id
  getOneById: async (req, res, next) => {
    const id = Number(req.params.id)

    const foundUser = await usersModel.find({ id: id })

    foundUser
      ? res.send({
          message: 'Get one user by id',
          id: id,
          data: foundUser
        })
      : res.status(404).send({
          message: 'Get one user by id failed',
          id: id
        })
  },

  // ---------------------------------------------------------------------------
  // Post a new user
  post: async (req, res, next) => {
    const { name, username, email, phone } = req.body

    if (name && username && email) {
      const newUser = {
        name,
        username,
        email,
        phone
      }

      await usersModel.create(newUser)

      res.send({
        message: 'Created new user',
        data: newUser
      })
    } else {
      res.status(400).send({
        message: 'Created new user failed'
      })
    }
  }
}
```

---

## Database NoSQL ODM References

- [MongoDB and Mongoose Cheatsheet](https://github.com/azat-co/cheatsheets/blob/master/mongodb-mongoose/readme.md)
- [Mongoose query cheatsheet](https://www.techcress.com/mongoose-js-query-cheatsheet)
