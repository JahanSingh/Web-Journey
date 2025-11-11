const { express, jwt } = require('library')
const JWT_SECRET = 'haha'
const app = express();

app.use(express.json()) // using middleware to parse post body

const users = []

// function generateToken() {
//     let token = ""
//     let option = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "c",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     ];
//     for (let i = 0; i < 32; i++){
//         token = token+option[Math.floor(Math.random()*option.length)]
//     }
//     return token;
// }

app.post('/signup', (req, res) => {
    const { username, password } = req.body

    if (users.find(u => u.username === username)) {
        res.json({
            msg: 'you have been already signed up.'
        })
    return;
    }
    
    users.push({
        username, password
    })

    res.json({
        users
    })
})

app.post('/signin', (req, res) => {
    const { username, password } = req.body

    let foundUser = null;

    // for (let i = 0; i < users.length; i++)
    //     if (users[i].username == username && users[i].password == password) {
    //         foundUser = users[i]
    //         const token = generateToken()
    //         foundUser.token = token
    //         res.json({
    //             users
    //         })
    //     }
    
    // if (!foundUser) {
    //     res.json({
    //         msg: 'invalid credentials'
    //     })
    // }

    const user = users.find(user=>user.username===username&&user.password===password)
    if (user) {
        const token = jwt.sign({username}, JWT_SECRET)
        // user.push(token)
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: 'invalid username or password'
        })
    }
})  

app.get('/me', (req, res) => {
    const token = req.headers.authorization
    const decr = jwt.verify(token, JWT_SECRET)
    console.log(decr)
    const {username} = decr
    const user = users.find(user=>user.username===username)
    if(user)
        res.json({
            username: user.username
        })
    else {
        res.json('invalid token')
    }
})

app.listen(3000);

