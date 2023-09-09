import express from "express"
import router from "./routes/userRoute"


const app=express()
app.use("api/user",router)
//mongoose
app.listen(5000)