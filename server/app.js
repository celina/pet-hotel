console.log('Starting up the server');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 var pets = require('./routes/pets');
var port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true})); // this creates req.body
//
app.use('/pets', pets);

app.listen(port, function() {
  console.log('We are running on port: ', port);
});
