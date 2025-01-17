import { bestSellers } from "../controller/topController.js";
import { Router } from "express";
import { authMiddleware } from "../../../middlewares/authMiddleware.js";

const router = Router();

router.get("/bestSellers", authMiddleware, bestSellers);

export default router;