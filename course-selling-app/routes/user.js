const {jwt, z, dotenv, bcrypt, express} = require('library');
const { userModel } = require('../db');
const { Router } = express
const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
    const requireBody = z.object({
        email: z.email(),
        password: z.string().min(8),
        firstName: z.string().min(3).max(20),
        lastName: z.string().min(3).max(20),
    });
    const parseSucess = requireBody.safeParse(req.body)
    if (!parseSucess.success) {
        res.status(403).json({
            message: 'invalid entry format',
            error: (parseSucess.error.issues),
        })
        return
    }
    const { email, password, firstName, lastName } = req.body
    const hashPass = await bcrypt.hash(password, 5)
    try {
        await userModel.create({
        email,
        password: hashPass,
        firstName,
        lastName,
    })
    }
    catch (e) {
        res.json({
            message: 'not added',
            error: e,
        })
        return
    }

    res.json({ message: 'you are signed up' })
});
userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const userData = await userModel.findOne({ email })
    if (userData) {
        const passMatch = await bcrypt.compare(password, userData.password);
        if (passMatch) {
          const token = jwt.sign({ email }, process.env.JWT_SECRET);
          res.json({
            message: "you are signed in successfully",
            token,
          });
        }
    }
    else return res.json({ message: 'provide valid email and password to login' })
});

userRouter.get('/purchases', (req, res) => { res.json({ message: 'purchase endpoint' }) });

module.exports = {
    userRouter
}