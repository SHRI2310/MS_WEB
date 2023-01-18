import mongoose from "mongoose";

  const modelSchema= new mongoose.Schema({
title:{
    type:String,
    required:[true,"title in required"],
    enum:["Mr","Mrs","Miss"],
    trim: true
},
name:{
    type:String,
    required:true,
    trim: true
},
middleName:{
    type:String,
    required:true,
    trim: true
},
lastName:{
    type:String,
    required:true,
    trim: true
},
address:{
    state:{
        type: String,
        required:true,
        trim: true
    },
    city:{
        type: String,
        required:true,
        trim: true
    },
    pincode:{
        type: String,
        required:true,
        trim: true
    },
    
},
mobile:{
        type: String,
        required:true,
        unique:true,
        trim: true
    },
    email:{
        type: String,
        required:true,
        unique:true,
        trim: true
    },
    password:{
        type: String,
        required:true,
        trim:true,
        Select:false
    },
    bankName:{
        type: String,
        required:true,
        trim: true
    },
    accountName:{
        type: String,
        required:true,
        unique:true,
        trim: true
    },
    accountNumber:{
        type: String,
        required:true,
        unique:true,
        trim: true
    },
    IFSC:{
        type: String,
        required:true,
        unique:true,
        trim: true
    },
panCardNo:{
    type: String,
    required:true,
    unique:true,
    trim: true
},
gstNumber:{
    type: String,
    required:true,
    unique:true,
    trim: true
},
adharNumber:{
    type: String,
    required:true,
    unique:true,
    trim: true
},
 qualification:{
 
        type: String,
        required:true,
        trim: true
   
 },
 nominieeDetails:{
    type: String,
    required:true,
    trim: true
 }
  })




  export const model = mongoose.model("Model",modelSchema)
