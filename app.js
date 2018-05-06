// Server
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../client/dist'));

// Middleware
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Postgres Database
// const db = require('../database/index.js');

// Router 
// const router = require('./routes.js');
// app.use('/',router);

// Listening and Exporting App
app.listen(4000, () => console.log('Listening to port 4000')); 
module.exports.app = app;