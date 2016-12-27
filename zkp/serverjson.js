var http = require('http');

var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type":"application/json"});

  var obj = {
    ho: 'John',
    ten: 'Wow',
    namsinh: 1999
  };
  res.end(JSON.stringify(obj));
}).listen(9999);
