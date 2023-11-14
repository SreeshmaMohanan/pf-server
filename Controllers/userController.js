const users=require('../Models/userSchema')
//register
exports.register =async(req,res)=>{
    console.log('inside register controller function');
    const {username,email,password}=req.body
    try{
        const existingUser =await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exists!!!")
        }else{
            const newUser=new users({
                username,email,password,github:"",linkedin:"",profile:""})
                await newUser.save()
            res.status(200).json(newUser)
        }
    }
    // console.log(`${username},${email},${password}`);
     catch(err){
        res.status(401).json(`register API failed, error:${err}`)
     }
   
}
//login
exports.login = async (req, res) => {
    let user;
    const { email, password } = req.body;
    try {
        user = await users.findOne({ email });
        
    }
}