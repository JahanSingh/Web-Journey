const fs = require("fs")
// PROMISE class gives you a promise I will return you later
// it is an object that represents the eventual completion (or failure) of an aysnc. operation and its returning value

// Promise
// setTimeoutPromisified(1000).then(callback)

// Callback
// setTimeout(callback, 1000)

// return object of primise class

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// let p = setTimeoutPromisified(4000)
// setTimeoutPromisified(3000).then(cb)  // syntactically cleaner way

function cb() {
    console.log('completed')
}


// console.log(p)

function random(resolve) {
    resolve()
}

p = new Promise(random)
p.then(cb)

