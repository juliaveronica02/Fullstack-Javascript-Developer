var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const privateKey = "sdhskdnk";

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
// mongodb confirguration.
mongoodConnect = process.env.MONGODB_CONNECTION;
mongoose.connect(mongoodConnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static("public")); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
