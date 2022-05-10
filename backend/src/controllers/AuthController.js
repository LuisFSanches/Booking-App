import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { createError } from "../utils/error.js"

export const register = async (req,res,next)=>{
    try{
        const {username, email, password} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        
        const newUser = new User({
            username,
            email,
            password:hash
        })

        await newUser.save()
        res.status(200).json('User has been created')

    }catch(err){
        next(err)
    }
}

export const login = async(req,res,next)=>{
    try{
        const {username, password} = req.body

        const user = await User.findOne({username})
        if(!user) return next(createError(404, "username or password incorrect"))

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) return next(createError(404, "username or password incorrect"))

        const token = jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        }, process.env.JWT_KEY)

        res.cookie('access_token', token,{httpOnly:true}).status(200).json({
            username:user.username,
            email:user.email
        })

    } catch(err){
        next(err)
    }
}