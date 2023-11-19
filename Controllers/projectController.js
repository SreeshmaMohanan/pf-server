const projects = require('../Models/projectSchema')
//add project
exports.addProjects= async(req,res)=>{
    console.log("inside add project function ");
    const userId =req.payload
    const projectImage= req.file.filename
    // console.log(projectImage);
    const {title,languages,overview,github,website}=req.body

    // console.log(title,languages,overview,github,website,projectImage,userId);
    try{
        const existingProject=await projects.findOne({github})
        if(existingProject){
            return res.status(406).json({message:"This Project already exists"});
        }else{
            const newProject= new projects({
                title,languages,overview,github,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }

    }catch(err){
        res.status(401).json("req failed ,error ",err)
    }

   

}