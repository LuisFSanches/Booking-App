import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async(req,res,next)=>{
    const hotelId = req.params.hotelid
    const newRoom =  new Room(req.body)

    try{
        const savedRoom = await newRoom.save()
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$push: {rooms: savedRoom._id}})
        } catch(err){
            next(err)
        }
        res.status(200).json(savedRoom)
    } catch(err){
        next(err)
    }
}

export const updateRoom = async(req,res,next)=>{
    try{
        const id = req.params.id

        const updatedRoom = await Room.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        res.status(200).json(updatedRoom)

    } catch(err){
        next(err)
    }
}

export const deleteRoom = async(req,res,next)=>{
    const roomId = req.params.roomid
    const hotelId = req.params.hotelid
    try{
        await Room.findByIdAndDelete(roomId)
           try{
            await Hotel.findByIdAndUpdate(hotelId,{$pull: {rooms: roomId}})
        } catch(err){
            next(err)
        }
        res.status(200).json("Room deleted")

    }catch(err){
        next(err)
    }
}

export const getSpecificRoom = async(req,res,next)=>{
    try{
        const id = req.params.id
        const room = await Room.findById(id)
        res.status(200).json(room)

    }catch(err){
        next(err)
    }
}

export const getAllRooms = async(req,res,next)=>{
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
        
    }catch(err){
        next(err)
    }
}