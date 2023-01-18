import mongoose from "mongoose";

export const connectDatabase =async ()=>{

    const{connection}= await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to ${connection.host}`)

}