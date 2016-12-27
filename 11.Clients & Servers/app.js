var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end('Hey server was started');
});

server.listen(7777);

console.log('Server start at localhost: 7777');
