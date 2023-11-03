const express= require("express")
const router =new express.Router()
const userController =require('../Controllers/userController')
// create path
router.post('/user/register')