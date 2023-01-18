import{ model} from "../models/model.js"
import {doc }from "../models/docModel.js"
// import  Mcq from "../models/mcqModel.js"
import bcrypt from"bcrypt"
import jwt  from "jsonwebtoken"
import { Mcq } from "../models/mcqModel.js"

export const register = async(req,res)=>{
    try {
        const data =req.body
    const{
        title,name,middleName,lastName,address,mobile, email,password,
         bankName,accountName,accountNumber,IFSC,panCardNo,gstNumber,
         adharNumber,qualification,nominieeDetails
        }= data

        
        let newArr =[  "title","name","middleName","lastName","address","mobile", "email","password",
            "bankName","accountName","accountNumber","IFSC","panCardNo","gstNumber",
            "adharNumber","qualification","nominieeDetails"] 
                     

       
         for ( let field of newArr){
        //  console.log(data[field]);
            if(!data[field]){
                return res.status(400).json({status:false,message:`${field} is mandatory`})
            }
         }

        let user = await model.findOne({$or: [ {mobile }, { email }]})
        if(user){
            return res.status(400).json({status:false,message:"user already exist with this number or email"})
        }

        data.password= await bcrypt.hash(password,10)

         user = await model.create(data)

         let token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SECRET);
    
        let options = {
            httpOnly: true,
            expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
        }
    
        return res.status(201 ).cookie("token", token, options).json({ status: true, data: user, token: token })
    } catch (error) {
        return res.status(500).json({status:false,message:error.message})
    }
}

export const login = async (req,res)=>{
try {
    
    const data = req.body;
    const {phone,name,password}=data;

     let user = await model.findOne({phone});
     if(!user){
        return res.status(400).json({status:false,message:"Invalid Phone or Password"})
     }

     let checkPass= await bcrypt.compare(password,user.password)
     if( !checkPass){
        return res.status(400).json({status:false,message:"Invalid Phone or Password"})
     }
     let token = jwt.sign({
        _id: user._id,
    }, process.env.JWT_SECRET);

    let options = {
        httpOnly: true,
        expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
    }

    return res.status(200).cookie("token", token, options).json({ status: true, data: user, token: token })

} catch (error) {
    return res.status(500).json({status:false,message:error.message})
}
 
}


export const logout = async (req, res) => {
    try {
        res.status(200).cookie("token", null, { expires: new Date(Date.now()) })
            .json({ success: true, message: "User Logedout" })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



export const  uploadQue = async (req,res)=>{
try {
    let data = req.body;
    let  {question,options}=data;

    let nArr=["question","options"];
    for( let field of nArr){
        if(!data[field]){
            return res.status(400).json({status:false,message:`${field} is mandatory`})

        }
    };

let addQues =await Mcq.create({question,options})
console.log(addQues)
return res.status(201).json({status:true,message:"question added",data:addQues})

} catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    })
}
   

}

export  const showAllques = async(req,res)=>{
     
  try {
    const showAllQue = await Mcq.find()

    return res.status(200).json({status:true,data:showAllQue})
     
  } catch (error) {
    return res.status(500).json({
        success: false,
        message: error.message
    })
  }

}