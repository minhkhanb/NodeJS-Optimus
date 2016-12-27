var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('this is the homepage');
});

app.get('/contact', function (req, res) {
  res.send('this is the contact page');
});

app.get('/profile/:id', function (req, res) {

  res.send('You\'re requested to see a profile with the id of ' + req.params.id);
});

app.listen(7777);
console.log('Server started at localhost:7777');
