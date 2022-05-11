import express from "express"
import { verifyAdmin} from "../utils/verifyToken.js"
import { createHotel, deleteHotel, getAllHotels, getSpecificHotel, updateHotel, countByCity, countByType } from "../controllers/HotelController.js"

const router = express.Router()

//CREATE
router.post("/", verifyAdmin, createHotel)
//UPDATE
router.put('/:id',verifyAdmin, updateHotel)

//DELETE
router.delete('/:id', verifyAdmin, deleteHotel)

//GET SPECIFIC
router.get('/find/:id', getSpecificHotel)

//GET ALL
router.get('/', getAllHotels)

router.get("/countByCity", countByCity);

router.get('/countByType', countByType)

export default router