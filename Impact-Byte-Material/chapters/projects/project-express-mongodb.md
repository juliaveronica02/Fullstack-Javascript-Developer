# Project Express with MongoDB

- Create a new repo for the project: `project-express-mongodb-mongoose`
- Generate or scaffold the Express app either from scratch or using `express-generator`
- Structure, modify, create, and use the modular Node.js files to create a REST API
  - Locally we can also use port `:8000` so it won't conflict with React server
  - In Heroku, the port will be setup automatically via `process.env.PORT`
- We can either:
  - Use a dummy or placeholder data such as `array` of `object` first
  - Use a Mongoose connection directly to store and manipulate data
- Check the REST API endpoints using Postman/Insomnia
  - Use Postman/Insomnia collections to better manage your requests
- Create User, Product and Order Collections
  - User have `orders` field with type `[{ type: Schema.Types.ObjectId, ref: 'Order' }]`
  - Order have `users` field with type `{ type: Schema.Types.ObjectId, ref: 'User' }` and `products` field with type `[{ type: Schema.Types.ObjectId, ref: 'Product' }]`
  - Product have `name` and `amount` field
- Push changes to GitHub
- Deploy the app on Heroku
  - Use MongoDB Atlas to have a MongoDB instance
  - Use Config Vars in Heroku to setup the MongoDB connection
- Submit your project

---

# References

-[Mongoose Populate](https://mongoosejs.com/docs/populate.html)
