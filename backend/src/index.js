import express from "express";
import mongoose from "mongoose";

import authRoute from './routes/auth'
import usersRoute from './routes/users'
import authRoute from './routes/auth'
import hotelsRoute from './routes/hotels'
import roomsRoute from './routes/rooms'


const app = express()

try{
    mongoose.connect('mongodb://localhost/reservationApp')
    console.log('Connected to mongoDB')
} catch(error){
    throw error
}

//Middlewares
app.use(express.json())
app.use('api/auth', authRoute)
app.use('api/users', usersRoute)
app.use('api/hotels', hotelsRoute)
app.use('api/rooms', roomsRoute)

app.listen(3333,()=>{console.log('Server Running at Port 3333')})