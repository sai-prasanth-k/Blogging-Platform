import express from "express"

// middlewares
import { verifyJWT } from "../../../middlewares/index.js"

import {
	adminLogin,
	getAllUsers,
	deleteUser,
	deleteBlog,
	addComplaint,
	getComplaints,
} from "../controllers/admin.js"

const router = express.Router()

router.post("/login", adminLogin)
router.get("/all-users", verifyJWT, getAllUsers)
router.post("/delete-user", verifyJWT, deleteUser)
router.post("/delete-blog", verifyJWT, deleteBlog)
router.post("/add-report", verifyJWT, addComplaint)
router.get("/get-reports", verifyJWT, getComplaints)

export default router
