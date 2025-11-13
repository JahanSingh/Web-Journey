const { Router } = require('library/node_modules/express')
const userRouter = Router();

userRouter.post("/signup", (req, res) => { res.json({ message: 'signup endpoint' }) });
userRouter.post('/signin', (req, res) => { res.json({ message: 'signin endpoint' }) });
userRouter.get('/purchases', (req, res) => { res.json({ message: 'purchase endpoint' }) });

module.exports = {
    userRouter
}