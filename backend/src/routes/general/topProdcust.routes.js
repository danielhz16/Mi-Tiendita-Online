import { bestSellers } from "../../controllers/general/topProdcutsController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/bestSellers", authMiddleware, bestSellers);

export default router;