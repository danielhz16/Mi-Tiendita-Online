import { register, login, refreshToken } from "../controller/authController.js";
import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
const router = Router();

router.post("/register", operatorMiddleware,register);
router.post("/login", login);
router.post("/refreshToken", authMiddleware, refreshToken);

export default router;