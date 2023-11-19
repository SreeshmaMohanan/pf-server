const mongoose =require('mongoose')
const validator=require('validator')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please provide your name'],
        trim: true,
        minlength: [3,"Name must be at least 3 characters"],
        maxLength: [50,"Name can't exceed 50 characters"]
    },
    email:{
        type: String,
        unique:true,
        lowercase: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
        },
        password:{
        type:String,
        required:true
        },
        github:{
            type:String
            
        },
        linkedin:{
            type:String
        },
        profile:{
            type:String
        }
   
})
const users=mongoose.model("users",userSchema)
module.exports=users