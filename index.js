import  express, { request }  from "express"
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
dotenv.config()

import { UserRouter } from "./routes/user.js"
import { User } from "./models/User.js"


// const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth',UserRouter)
app.use(express.json());
app.use(express.urlencoded({extended:true}));




mongoose.connect("mongodb+srv://hanoona:hanoona9631@cluster0.ovamqiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


app.post('/signup',(res,req) =>{
    console.log(req.body)
    // User.create(req.body)
    // .then((res)=>{res.send(User)})
    
    
})



app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})

