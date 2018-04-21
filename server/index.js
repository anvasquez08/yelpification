const express = require('express');
const parser = require('body-parser');
const axios = require('axios');
const db = require('../database/index.js');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());

app.listen(4000, () => console.log('Listening to port 3000')); 