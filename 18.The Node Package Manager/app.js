var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  console.log('request was made: ' + req.url);
  if(req.url === '/home' || req.url === '/') {
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log(req.url);
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if(req.url === '/contact') {
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }
  else if(req.url === '/api/khale') {
    var person = [
      {
        name: 'KhaLe',
        age: 27
      },
      {
        name: 'Marc',
        age: 27
      }
    ];
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(person));
  }
  else {
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(7777, '127.0.0.1');

console.log('Server start at localhost: 7777');
