var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//app.use('views', './views');
//attach middleware
app.use('/assets', express.static('assets'));
// app.use('/assets', function (req, res, next) {
//   console.log(req.url);
//   next();
// });

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/contact', function (req, res) {
  //http://localhost:7777/contact?dept=marketing&person=khale
  console.log(req.query)
  res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function (req, res) {
  var data = {
    age: 27,
    job: 'developer',
    hobbies: ['eating', 'fighting', 'fishing']
  };
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(7777);
console.log('Server started at localhost:7777');
