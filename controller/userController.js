const jwt = require("jsonwebtoken")

const registerUser = (req, res) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY; 
    const requestBody = req.body
    let data = { 
      email: requestBody.email, 
      password: requestBody.password, 
    } 
  
    const token = jwt.sign(data, jwtSecretKey); 
    res.json({status: "ok", token});
}

const loginUser = (req, res) => {
  res.json({status: "Ok"})
}

const getProfile = (req, res) => {
  const data = {}
  res.json({status: "Ok", data})
}
module.exports = { registerUser, loginUser, getProfile }