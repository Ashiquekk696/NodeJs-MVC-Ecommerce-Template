const { User } = require("../model/Users")
const jwt = require('jsonwebtoken')
const cloudinary = require('../config/cloudinary_config');
const { verifyToken } = require("../config/verify_token");
const ForgotPasswordModel = require("../model/forgot_password_model");

exports.signUp = async (req,res)=>{
 var result;
 try { 
   const {name,email,password,confirm_password} =await req.body
   const {filename,path} =await req.file
   if(password==null||confirm_password==null){
    result = {
      error: "Passwords can't be empty"
     }

   await res.status(401).json({result:result})
   }
  else if(confirm_password!=password){
     result = {
      error: "Passwords doesn't match"
     }

   await res.status(401).json({result:result})
   }
  else{
    await cloudinary.v2.uploader.upload(path,{folder:"ashique_ecommerce_subfolder"},async(error, cldResult) => {
      console.log(cldResult);
      if(error){
        res.status(500).json({ error: 'Error uploading image to Cloudinary' });
        return;
      }

     const user =     new User({name,email,password})
     await user.save(); 
      result = {
      _id: user._id, // Include any other fields you want in the response
      name: user.name,
      email: user.email,
      profile_pic_url:cldResult.secure_url
    };
  
    await res.status(201).json({mess:"User Created Successfully",result:result})
    })
     
}
} catch (error) {
    console.log("ee",error);
}
}

exports.logIn = async(req,res)=>{
  try { 
   const {email,password} = req.body 
    const userDb =await User.findOne({"email":email,"password":password});
   if(userDb!=null){
    const token = jwt.sign({
  id:userDb._id,
  email:email
    },process.env.JWT_SECRET)
    res.status(201).json({"message":"User logged in successfully","id":userDb._id,token:token})
   }
   else{
    res.status(401).json({"message":"User not found"})
   }
    console.log("userDb",userDb);
 } catch (error) {
    console.log(error);
  }
}

exports.forgotPassword = async(req,res)=>{

    const {email} = req.body;
    const otpLength = 6;
    let otp = '';
    for (let i = 0; i < otpLength; i++) {
      otp += Math.floor(Math.random() * 10);
    }
  
   try {
    const forgotPassword = await ForgotPasswordModel({email,otp});
    await forgotPassword.save();
    
   } catch (error) {
    
   } 

}