const mongoose = require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("connected to the database")
}).catch((err)=>{
    console.error(`could not connect to the database ${err}`)

})
