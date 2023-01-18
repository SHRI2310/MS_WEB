 import mongoose from "mongoose";

 const mcqSchema = new mongoose.Schema({

question:{
    type:String,
    required:true,

},
options:[
    {
        A:{
            type:String,
            trim:true
        },
        isCorrect:{
            type:Boolean,
            default:false,
            trim:true
        }

    },
      {
        B:{
            type:String,
            trim:true
        },
        isCorrect:{
            type:Boolean,
            default:false,
            trim:true
        }

    },
      {
        C:{
            type:String,
            trim:true
        },
        isCorrect:{
            type:Boolean,
            default:false,
            trim:true
        }

    },
      {
        D:{
            type:String,
            trim:true
        },
        isCorrect:{
            type:Boolean,
            default:false,
            trim:true
        }

    }
]

 })

 export const Mcq = mongoose.model("Mcq",mcqSchema)