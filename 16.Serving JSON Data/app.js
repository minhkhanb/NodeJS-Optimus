var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {"Content-Type":"application/json"});
  var myObj = {
    name: 'KhaLe',
    job: 'Developer',
    age: 27
  };
  res.end(JSON.stringify(myObj));
});

server.listen(7777, '127.0.0.1');
console.log('Server started at localhost:7777');
