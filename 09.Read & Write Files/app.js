var fs = require('fs');

var readMe = fs.readFile('readme.txt', 'utf8', function (err, data) {
  console.log(data);
  fs.writeFile('writeme.txt', data);
});
console.log('test');
//console.log(readMe);
//fs.witeFileSync('writeme.txt', readMe);
