const express= require("express")
const router =new express.Router()
const userController =require('../Controllers/userController');
const jwtMiddleware = require("../Middleware/jwtMiddleware");
const projectController =require("../Controllers/projectController");
const multerConfig = require("../Middleware/multerMiddleware");
// create path register API
router.post('/user/register',userController.register)
//path to login api
router.post('/user/login',userController.login);
//add project
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)



module.exports = router