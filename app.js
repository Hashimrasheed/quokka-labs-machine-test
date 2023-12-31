var express = require('express');
const dotenv = require('dotenv'); 
const connectDB = require("./config/db")
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');

var app = express();

dotenv.config()

// Connect database
connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', usersRouter);
app.use('/articles', articlesRouter);

module.exports = app;
