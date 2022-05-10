import express from "express"

import {deleteUser, getAllUsers, getSpecificUser, updateUser } from "../controllers/UserController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

/*router.get('/checkauthentication', verifyToken, (req,res,next)=>{
    res.send("Hello user, you are logged in")
})

router.get('/checkuser/:id', verifyUser, (req,res,next)=>{
    res.send('Hello user, you are logged in and can delete your account')
})

router.get('/checkadmin/:id', verifyAdmin, (req,res,next)=>{
    res.send('Hello admin, you are logged in and can delete all accounts')
})*/


//UPDATE
router.put('/:id', verifyUser, updateUser)

//DELETE
router.delete('/:id', verifyUser, deleteUser)

//GET SPECIFIC
router.get('/:id', getSpecificUser)

//GET ALL
router.get('/', verifyAdmin, getAllUsers)

export default router