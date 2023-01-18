import express from "express";
import routes from "./routers/route.js";
import cookieParser from "cookie-parser";
export const app= express()
app.use(cookieParser())
 app.use(express.json());
 app.use(express.urlencoded({extended:true}))




 app.use("/route",routes)