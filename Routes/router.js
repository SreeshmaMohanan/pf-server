const express= require("express")
const router =new express.Router()
const userController =require('../Controllers/userController')
// create path register API
router.post('/user/register',userController.register)
//path to login api
router.post('/user/login',userController.login);

module.exports =router