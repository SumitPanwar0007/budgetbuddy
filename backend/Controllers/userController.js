const userModel = require('../models/userModel')

//login callback
const loginController= async (req,res)=>{
        try{
            const {email,password}= req.body;
            console.log(email,password)
            const user = await userModel.findOne({email,password});
            if(!user){
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
            res.status(200).json({
                success:true,
             user,
            });
        }
        catch(error){
            res.status(500).json({
                success:false,
                error,
                message: "Internal server error",
            });
        }
};


// Register callback
const registerController= async (req,res)=>{
    try{
        console.log("first",req.body    )
        const newUser= new userModel(req.body);
        await  newUser.save();
        res.status(201).json({
            success : true ,
            newUser
        });
    }
    catch(error){
        res.status(400).json({
            success:false,
            error:error.message,
            message: "Internal server error",
        })
    }

}

module.exports= {loginController,registerController};