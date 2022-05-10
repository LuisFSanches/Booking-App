import Hotel from "../models/Hotel.js"

export const createHotel = async(req,res,next)=>{
    const newHotel = new Hotel(req.body)

    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err)
    }
}

export const updateHotel = async(req,res,next)=>{
    try{
        const id = req.params.id

        const updatedHotel = await Hotel.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        res.status(200).json(updatedHotel)

    } catch(err){
        next(err)
    }
}

export const deleteHotel = async(req,res,next)=>{
    try{
        const id = req.params.id
        await Hotel.findByIdAndDelete(id)
        res.status(200).json("Hotel deleted")

    }catch(err){
        next(err)
    }
}

export const getSpecificHotel = async(req,res,next)=>{
    try{
        const id = req.params.id
        const hotel = await Hotel.findById(id)
        res.status(200).json(hotel)

    }catch(err){
        next(err)
    }
}

export const getAllHotels = async(req,res,next)=>{
    try{
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
        
    }catch(err){
        next(err)
    }
}