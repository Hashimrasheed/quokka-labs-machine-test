const jwt = require("jsonwebtoken")

/* Create a jwt token while login a user */
const createToken = (user) => {
    const accessToken = jwt.sign({email: user.email, _id: user._id, name: user.name}, process.env.JWT_SECRET_KEY)
   return accessToken
}

/* Middleware to verify user token */
const verifyToken = (req, res, next) => {
    try {
        const token = req.headers['token'];
        if(!token) throw new Error("you are not authenticated. please login again")

        const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(!validToken) throw new Error("you are not authenticated. please login again")
        req.email = validToken.email;
        return next()
    } catch (error) {
        res.status(401).json(error.message) 
    }

}

module.exports = { createToken, verifyToken }