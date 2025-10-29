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

function cb() {
    console.log('3 seconds have been passed')
}

// setTimeoutPromisified(3000).then(cb)  // syntactically cleaner way

let p = setTimeoutPromisified(4000)
console.log(p)