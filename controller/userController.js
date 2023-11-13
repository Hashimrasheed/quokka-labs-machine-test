const bcrypt = require("bcrypt")
const UserModel = require("../models/users")
const {createToken} = require("../utils/jwt")

const registerUser = async (req, res) => {
  try {
    const {name, email, password} = req.body

    const hash = await bcrypt.hash(password, 10)
    const user = new UserModel({name, email, password: hash});
    await user.save()
    res.json({status: "User registered successfully"});
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email})
    if(!user) throw new Error("user not exist")

    const match = await bcrypt.compare(password, user.password)
    if(!match) throw new Error("wrong email or password")

    const accessToken = createToken(user)
    res.json({status: "Logged in successfully", token: accessToken})
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getProfile = async (req, res) => {
  const user = await UserModel.findOne({email: req.email})
  res.json({name: user.name, email: user.email, _id: user._id})
}

module.exports = { registerUser, loginUser, getProfile }