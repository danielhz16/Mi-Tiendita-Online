import { getAviableProducts, getProductsByCategory } from "../../controllers/user/products/productsController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/getAviableProducts", authMiddleware, getAviableProducts);
router.get("/getProductsByCategory/:category", authMiddleware, getProductsByCategory);

export default router;