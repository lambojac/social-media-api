import express from "express"
import { getAllUser } from "../controllers/userRoute"
import { signup } from "../controllers/userRoute"
const router=express.Router()

router.get("/",getAllUser)
router.post("/signup",signup)

export default router