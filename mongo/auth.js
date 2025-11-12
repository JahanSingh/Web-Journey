const { jwt, dotenv } = require('library')
const {JWT_SECRET}=process.env

function auth(req, res, next) {
  const token = req.headers.authorization
  const decodedData = jwt.verify(token,JWT_SECRET)
  if (decodedData) {
    req.id = decodedData.id
    next()
  } else {
    res.status(403).json({
      message: 'invalid credentials'
    })
  }
}

module.exports = {
    auth,
}