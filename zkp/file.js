var fs = require('fs');
var content = fs.readFileSync( __dirname + "/danhsach.txt" );
console.log(content);
console.log(content.toString());
console.log(content.toJSON());
