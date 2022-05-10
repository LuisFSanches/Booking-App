import User from "../models/User.js"


export const updateUser = async(req,res,next)=>{
    try{
        const id = req.params.id

        const updatedUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        res.status(200).json(updatedUser)

    } catch(err){
        next(err)
    }
}

export const deleteUser = async(req,res,next)=>{
    try{
        const id = req.params.id
        await User.findByIdAndDelete(id)
        res.status(200).json("User deleted")

    }catch(err){
        next(err)
    }
}

export const getSpecificUser = async(req,res,next)=>{
    try{
        const id = req.params.id
        const user = await User.findById(id)
        res.status(200).json(user)

    }catch(err){
        next(err)
    }
}

export const getAllUsers = async(req,res,next)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
        
    }catch(err){
        next(err)
    }
}