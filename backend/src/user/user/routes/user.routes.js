import { editUser, getUser } from "../controller/userController.js";
import { authMiddleware } from "../../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get('/getUser', authMiddleware, getUser);
router.put('/editUser', authMiddleware, editUser);

export default router