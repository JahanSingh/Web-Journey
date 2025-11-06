const express = require('express')
const app = express()

function isOldEnough(req, res, next) {
    if (req.query.age >= 15)
        next();
    else {
        res.json({
            msg: 'sorry for inconvience. you are not old enough to take this ride'
        })
    }
}

app.use(isOldEnough)

app.get('/ride1', (req, res) => {
    res.json({
        msg: 'enjoy the ride 1'
    })
})

app.get("/ride2", (req, res) => {
  res.json({
    msg: "enjoy the ride 2",
  });
});

app.listen(3300)