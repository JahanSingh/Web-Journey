const { express, jwt, dotenv, z } = require("library");
const app = express();

app.use(express.json());

app.post("/user/signup", (req, res) => {res.json({message:''})});
app.post('/user/signin', (req, res)=>{res.json({message:''}})
app.get('/user/purchases', (req, res)=>{res.json({message:''}})
app.post('/course/purchase', (req, res)=>{res.json({message:''}})
app.get("/courses", (req, res) => {res.json({message:''}) });

app.listen(3000);
