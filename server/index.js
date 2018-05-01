// Server

const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../client/dist'));

// Middleware
const parser = require('body-parser');
app.use(parser.json());

// MySQL Database
const db = require('../database/index.js');

// Router 
const router = require('./routes.js');
app.use('/myplaces',router);

// Listening and Exporting App
app.listen(4000, () => console.log('Listening to port 4000')); 
module.exports.app = app;