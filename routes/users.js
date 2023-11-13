const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");
const { isSourceValid } = require('../utils/source-middleware');
const { verifyToken } = require('../utils/jwt');

/* User profile routes */
router.post('/register', isSourceValid, userController.registerUser);
router.post('/login', isSourceValid, userController.loginUser);
router.get('/get-profile', verifyToken, userController.getProfile);

module.exports = router;
