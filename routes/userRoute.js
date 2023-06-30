const express = require('express')
const { register , login  } = require('../controller/userController')
const userRouter = express.Router()

userRouter.post('/register' , register)
userRouter.post('/enter' , login)




module.exports = userRouter