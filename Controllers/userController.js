//register
exports.register =(req,res)=>{
    console.log('inside register controller function');
    res.status(200).json("reg req recived")
}