var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//app.use('views', './views');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
  res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function (req, res) {
  var data = {
    age: 27,
    job: 'developer'
  };
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(7777);
console.log('Server started at localhost:7777');
