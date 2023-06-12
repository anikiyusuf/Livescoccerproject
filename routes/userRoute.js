const express = require('express')
const { register , login , logOut } = require('../controller/userController')
const userRouter = express.Router()

userRouter.post('/register' , register)
userRouter.post('/login' , login)




module.exports = userRouter