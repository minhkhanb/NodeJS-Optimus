var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// myReadStream.on('data', function (chunk) {
//   console.log(' new chunk received ');
//   //console.log(chunk);
//   myWriteStream.write(chunk);
// });
// myReadStream.pipe(myWriteStream);

// var server = http.createServer(function (req, res) {
//   console.log('request was made at route: ' + req.url);
//   res.writeHead(200, {"Content-Type":"text/plain"});
//   res.end('Hey server was started');
// });
//
// server.listen(7777, '127.0.0.1');
//
// console.log('Server start at localhost: 7777');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type":"text/plain"});
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(7777, '127.0.0.1');

console.log('Server start at localhost: 7777');
