## Setting MongoDB Atlas.
* go to mongodb.com.
* click "Try Free" or using sign in (recommend using Sign In).
* login with google.
* Create a new cluster.
* cloud provide and region choose AWS - choose the free tier country (singapore) for more details go to assets folder find MongoDB-Atlas screenshoots.
* Create cluster.
* go to side bar - choose database access.
* add new user.
* type username and password (to remember it because we need to pass into mongoDB URL).
* go back to cluster.
* connect - connect your application - copy connection string.

## .env 
* to secure our information like database and private key.
* type: string.

## app.js
must call mongodb confirguration from .env
```javascript
// mongodb confirguration.
mongoodConnect = process.env.MONGODB_CONNECTION;
mongoose.connect(mongoodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```