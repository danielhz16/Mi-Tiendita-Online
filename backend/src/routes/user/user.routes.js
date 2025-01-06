import { editUser, getUser } from "../../controllers/user/user/userController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.put("/editUser", authMiddleware, editUser);
router.get("/getUser", authMiddleware, getUser);

export default router;