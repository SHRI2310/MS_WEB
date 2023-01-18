 import {app} from "./app.js"
 import { connectDatabase } from "./config/database.js"
import { config } from "dotenv"
import mongoose from "mongoose"
config({path:"./config/config.env"})

mongoose.set('strictQuery', true)
connectDatabase()
 app.listen(process.env.PORT,()=>{
  console.log( ` runnning on port ${process.env.PORT}`)
 })
