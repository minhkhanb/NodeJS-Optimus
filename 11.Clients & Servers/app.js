var http = require('http');

var server = http.createServer(function (req, res) {
  console.log('request was made at route: ' + req.url);
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end('Hey server was started');
});

server.listen(7777, '127.0.0.1');

console.log('Server start at localhost: 7777');
