import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup=async(req,res)=>{
    try{
        const {FullName,EmailID,Password}=req.body;
        const user=await User.findOne({EmailID})
        if(user){
            return res.status(400).json({message:"User already exists"})
        }
        const hashPassword=await bcryptjs.hash(Password,10);
        const createdUser=new User({
            FullName:FullName,
            EmailID:EmailID,
            Password:hashPassword
        });
        await createdUser.save()
        res.status(201).json({message:"User created successfully",user:{
            _id:createdUser._id,
            FullName:createdUser.FullName,
            EmailID:createdUser.EmailID,
        }})

    }
    catch(error){
        console.log("Error:"+error.message);
        res.status(500).json({message:"Internal server error"});



    }

};
export const login=async(req,res)=>{
    try {
        const {EmailID,Password}=req.body;
        const user= await User.findOne({EmailID});
        const isMatch=await bcryptjs.compare(Password,user.Password);
        if(!user||!isMatch){
            return res.status(400).json({message:"Invalid Username or Password"});

        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id:user._id,
                FullName:user.FullName,
                EmailID:user.EmailID
            }});

        }
    } catch (error) {
        console.log("Error:"+error.message)
        res.status(500).json({message:"Internal server error"});

    }
}