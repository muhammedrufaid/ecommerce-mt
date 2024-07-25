const express = require('express')

// controller functions
const { signupUser , loginUser } = require('../controllers/userController')

const router = express.Router()

// login route
// localhost:4000/api/user/login
router.post('/login' , loginUser) 


// signup route
// localhost:4000/api/user/signup
router.post('/signup' , signupUser) 


module.exports = router