const {express, jwt} = require('library')
const app = express()
const JWT_SECRET = 'hihihi'

const users = []
app.use(express.json())

app.post('/signup', (req, res)=>{
    const {username, password} = req.body
    const user = users.find(u=>u.username===username)
    if(user)
        res.json({
        message: 'you have already signed up.'
    })
    users.push({
        username, password
    })

    res.json({
        message: 'you are signed in.'
    })
})

app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);
    if(user) {
        const token = jwt.sign({username}, JWT_SECRET)
        res.headers({authorization: token})
        res.json({token})
    }
    else {
        res.status(403).json({
            message: 'invalid credentials'
        })
    }
});

function auth (req, res, next) {
    const decr = req.headers.authorization;
    const decoded = jwt.verify(decr, JWT_SECRET);
    if(decoded.username) {
        req.username = decoded.username
        next()
    }
    else
        res.json({
        message: 'you are not logged in'
    })
}

app.get("/me", auth, (req, res) => {
    const user = users.find(u=>u.username===req.username)
    if (user) res.json({ username: user.username, password: user.password });
    else
      res.json({
        message: "invalid token",
      });
});

app.listen(3000)