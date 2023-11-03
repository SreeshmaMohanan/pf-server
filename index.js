//import dotenv file express an cors
require('dotenv').config() 
const express = require("express");
const cors=require("cors")

//creating express server
const pfServer=express()
pfServer.use(cors())
pfServer.use(express.json())
//creating a port for the server to run on
const PORT=4000 ||process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project fair server starte at port:${PORT} an waiting for client request!!!`);
})
//http get request resoving
pfServer.get("/",(req,res)=>{
    res.send(`<h1>project-fair</h1>`);
})
