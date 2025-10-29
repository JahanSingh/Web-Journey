// Dumb program to declare a variable
// xxxxx---var---xxxxx | let | const

let firstName = 'Anubhanv';
var isStudent = false;
const pie = 3.14;

// console.log(firstName);
// console.log(isStudent);
// console.log(pie);

let users = ['ajay', 'suhana', 'raj'];      // Arrays
// console.log(users[0]);

let sum = 10 + 2;           // Arithmetic Operator
let age = 12;               // Assignment Operator
let canVote = age > 18;     // Relational operator
let isEqual = (10 === 10)   // comparision operator
let isTrue = (true && false)// Logical Operator

// Function
function greet(user) {
    console.log('Hello, ', user.name, 'your age is', user.age);
}

// greet("sidhhu");
// greet("raman");
// greet("ashok");

// Loops -- run a certain logic again-n-again

// for (let i = 0; i < users.length; i++)
//     console.log(users[i]);

// Objects -- collection of key/value pairs

let user1 = {
    name: 'Ajay',
    age: 30
}

// console.log(user1.name)
// console.log(user1['name'])
greet(user1)

const val1 = {
    name: 'ajay', age:12, nums: []
}

val1.nums = [2, 3, 4];
val1.isAble = true;

console.log(val1)