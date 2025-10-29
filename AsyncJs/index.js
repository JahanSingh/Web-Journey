const fs = require('fs');

const content = fs.readFileSync('a.txt', 'utf-8');
// console.log(content);

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
    return a / b;
}

// Fuctional Argument
function doOperation(a, b, fun) {
    return fun(a, b);
}

// console.log(doOperation(3, 4, div))

// Asynchronous Code, Callbacks

function afterFileRead(err, content) {
    console.log(content);
}

// const contents = fs.readFile('a.txt', 'utf8', afterFileRead)
// console.log(contents)

function timeOut() {
  console.log("Click the button");
}

console.log('Hi');

// setTimeout(timeOut, 1500);

console.log("Welcome");

