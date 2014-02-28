
var http = require('http');

var express = require('express');
var wines = require('./routes/wines.js');

var app = express();

app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyparser());
});

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.post('/wines', wine.addWine);
app.put('/wines/:id', wine.updateWine);
app.delete('/wines/:id', wine.deleteWine);

app.listen(3000);

console.log('Listening on port 3000');