import express from "express";
import { login, logout, register, uploadQue } from "../controllers/adminController.js";
const router = express.Router()

router.route("/test").get((req,res)=>{
    return res.send("hello  working")
})
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)

router.route("/uploadQue").post(uploadQue)

export  default router