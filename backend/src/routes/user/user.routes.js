import { editUser } from "../../controllers/user/user/userController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.put("/editUser", authMiddleware, editUser);

export default router;