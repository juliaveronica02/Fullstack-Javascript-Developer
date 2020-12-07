// importing the required modules.
var express = require('express');
var path = require('path');
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const jwt = require("jsonwebtoken");
const privateKey = "null";

// call routes from router folder.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var beritaRouter = require('./routes/berita');
var emailSubsRouter = require('./routes/emailSubs');
var banner130 = require('./routes/banner130');
var banner400 = require('./routes/banner400');

// Initialize the express object.
var app = express();

// enabling cors for all requests by using cors middleware.
app.use(cors())
// solve: has block by cors.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(logger('dev'));
// body-parser: parse requests of content-type: application/json (to parse incoming data).
app.use(bodyParser.json());
// body-parser: parse requests of content-type: application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));
// parse requests of content-type: application/json.
// parses incoming requests with JSON payloads.
app.use(express.json());
// parse application/x-www-form-urlencoded.
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/images")));
app.use(express.static(path.join(__dirname, "public/images/banner130")));
app.use(express.static(path.join(__dirname, "public/images/banner400")));
app.use("/public/images", express.static("public/images"));
app.use("/public/images/banner130", express.static("public/images/banner130"));
app.use("/public/images/banner400", express.static("public/images/banner400"));

// simple route.
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/berita', beritaRouter);
app.use('/email', emailSubsRouter);
app.use('/banner130', banner130);
app.use('/banner400', banner400);

module.exports = app;
