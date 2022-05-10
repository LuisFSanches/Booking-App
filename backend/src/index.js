import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

dotenv.config()


const app = express()

try{
    mongoose.connect('mongodb://localhost/reservationApp')
    console.log('Connected to mongoDB')
} catch(error){
    throw error
}

//Middlewares
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use("/api/hotels",hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(3333,()=>{console.log('Server Running at Port 3333')})