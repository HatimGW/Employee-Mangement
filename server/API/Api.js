const express = require("express")
const router = express.Router()
const collectn = require("../Models/Data")
const admin = require("../Models/login")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
router.use(express.json())

const Authentication = async(req,res,next)=>{

const token = req.cookies.token;
try {
    if(!token){
        res.status(400).json({message:"Session Expired"})
    }
    else{
        const decoded = jwt.verify(token,process.env.jwt_secret)
        req.username = decoded.email
        next()
    }
} catch (error) {
    console.log(error)
}
}

const tokendestroy =async(req,res,next)=>{
    res.clearCookie("token",{httpOnly:true,secure:true,sameSite:"None"})
    next();
}

router.get("/logout",tokendestroy,async(req,res)=>{
    res.status(200).json({success:true, message:"Logout Successfully"})
})

router.post("/login", async(req,res)=>{
  const{email, password}=req.body

  try {
    const user = await admin.findOne({email})
  if(!user){
    res.status(400).json({message:"Invalid Access"})
  }
  else{
    const compare = await bcrypt.compare(password,user.password)
    if(compare){
        const token = jwt.sign({email:user.email,userId:user._id},process.env.jwt_secret,{expiresIn:"1h"})

        res.cookie("token",token,{httpOnly:true, secure:true, sameSite:"None",maxAge:3600000})
        res.status(200).json({success: true,message:"Login Successfully"})
    }
    else {
        res.status(400).json({ message: "Invalid Access" });
      }
    }
  
} catch (error) {
    res.status(500).json({message:"Internal Error"})
  }
  

})

router.post("/add",Authentication, async(req,res)=>{

    const{id,name,age,city,salary}= req.body
    try {
        if(!id || !name || !age || !city || !salary){
            res.status(400)
        }
        else{
            const check = await collectn.findOne({id})
            if(!check){
                const add = new collectn({
                    id,name,age,city,salary
                   })
                   await add.save()
                   res.status(200).json({message:"Submitted",success:true})
            }
            else{
                res.json({already:true})
            }
            
        }
    } catch (err) {
        res.status(500).send("Invalid Data")
    }
})
router.get("/fetch",Authentication,async(req,res)=>{
    try {
        const check = await collectn.find();
        if(check){
        res.status(200).json({Name:req.username,Data:check})
        }
        
    } catch (error) {
        console.log(error)
    }
})

router.delete("/del",Authentication,async(req,res)=>{
    const{id}=req.query
    try {
        const result = await collectn.deleteOne({id});

        if (result.deletedCount > 0) {
            console.log("Deleted");
            res.send("Deleted");
        } else {
            console.log("Not Found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
router.post("/edit/:id",Authentication,async(req,res)=>{
    const id = req.params.id;
    const{name,age,city,salary}=req.body
    try {
        await collectn.updateOne({
            _id:id
        },{
            $set:{
                name:name,
                age:age,
                city:city,
                salary:salary,
            }
        })
        res.status(200).json({success:true})
    } catch (error) {
        console.log(error)
    }
    
})


module.exports=router












