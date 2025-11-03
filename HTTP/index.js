const express = require('express')
const app = express()

// define route handler
app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>')
})

app.listen(3000) // define port