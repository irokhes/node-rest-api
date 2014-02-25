
var http = require('http');

var express = require('express');
var wines = require('./routes/wines.js');

var app = express();

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);

app.listen(3000);

console.log('Listening on port 3000');