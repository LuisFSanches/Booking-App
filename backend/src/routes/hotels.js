import express from "express"
import { verifyAdmin} from "../utils/verifyToken.js"
import { createHotel, deleteHotel, getAllHotels, getSpecificHotel, updateHotel } from "../controllers/HotelController.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createHotel)
//UPDATE
router.put('/:id',verifyAdmin, updateHotel)

//DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

//GET SPECIFIC
router.get('/:id', getSpecificHotel)

//GET ALL
router.get('/', getAllHotels)

export default router