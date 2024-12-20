import { login, register, updatePassword } from "../../controllers/auth/authController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.put("/updatePassword",authMiddleware, updatePassword);

export default router;