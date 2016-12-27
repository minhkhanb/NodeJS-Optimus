//normal function statement
function sayHi() {
  console.log('hi');
}

sayHi();

//function expression
var sayBye = function () {
  console.log('bye');
};

sayBye();

function callFunc(fn) {
  fn();
}

//function expression
var saygoodBye = function () {
  console.log('saygoodBye');
};

callFunc(saygoodBye);
