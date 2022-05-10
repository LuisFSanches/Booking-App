import express from "express"
import { verifyAdmin} from "../utils/verifyToken.js"
import { createRoom, deleteRoom, getAllRooms, getSpecificRoom, updateRoom } from "../controllers/RoomController.js"

const router = express.Router()

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom)
//UPDATE
router.put('/:id',verifyAdmin, updateRoom)

//DELETE
router.delete('/:roomid/:hotelid', verifyAdmin, deleteRoom)

//GET SPECIFIC
router.get('/:id', getSpecificRoom)

//GET ALL
router.get('/', getAllRooms)

export default router