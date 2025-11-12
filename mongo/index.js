const {express, jwt, mongoose, dotenv, bcrypt} = require('library')
const {userModel, todoModel} = require('./db')
const { DB_URL, JWT_SECRET } = process.env
const {auth}=require('./auth')
mongoose.connect(DB_URL)

const app = express();
app.use(express.json())

app.post('/signup', async (req, res)=>{
  const { email, password, name } = req.body
  try {
    const hashPass = await bcrypt.hash(password, 5)
    await userModel.create({
        email, password: hashPass, name,
    })
    res.json({
        message: 'you are signed up.'
    })
  } catch (e) {
    res.json({
      message: 'user already exist'
    })
  }
})

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const response = await userModel.findOne({
    email,
  });
  const passMatch = bcrypt.compare(password, response.password)
  if(passMatch) {
    const token = jwt.sign({
      id: response._id
    }, JWT_SECRET)
    res.json({
      token,
      message: 'you are signed in',
    })
  } else {
    res.status(403).json({
      message: 'invalid credentials'
    })
  }
});

app.use(auth)

app.post('/todo', async (req, res) => {
  const userId = req.id
  const { title } = req.body
  await todoModel.create({ userId, title })
  res.json({
    userId,
    message: 'todo added'
  })
})

app.get('/todos', async (req, res) => {
  const userId = req.id
  const todos = await todoModel.find({userId})
  res.json({todos})
})

app.listen(3000)