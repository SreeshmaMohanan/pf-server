//import dotenv file express an cors
require('dotenv').config() 
const express = require("express");
const cors=require("cors")
const router=require('./Routes/router');
// const jwtMiddleware = require('./Middleware/jwtMiddleware');
require('./DB/connection')
//creating express server
const pfServer=express()
pfServer.use(cors())
pfServer.use(express.json())
// pfServer.use(jwtMiddleware)
pfServer.use(router)
//creating a port for the server to run on
const PORT=4000 ||process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project fair server starte at port:${PORT} an waiting for client request!!!`);
})
//http get request resoving
pfServer.get("/",(req,res)=>{
    res.send(`<h1>project-fair server started and waiting for client requests !!!</h1>`);
})
