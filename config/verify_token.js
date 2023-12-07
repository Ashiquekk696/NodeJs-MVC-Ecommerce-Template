const { json } = require("express")
const jwt = require('jsonwebtoken');
exports.verifyToken = async (req,res,next)=>{
    const token =await req.headers.authorization.replace("Bearer ","")
  
    if(!token){
    return res.status(401).json({"message":"token not provided"})
    }
    console.log("tt",token);
      jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        console.log(err);
        if(err){
            return res.status(401).json({msg:"Invalid token"})
        }
        console.log("my id",decoded.id);
        req.userId = decoded.id;
        next();
      })
}