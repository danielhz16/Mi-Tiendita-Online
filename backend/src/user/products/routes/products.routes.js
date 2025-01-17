import { getProductsByCategory, getAviableProducts } from "../controller/productsController.js";
import { authMiddleware } from "../../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get('/getProductsByCategory/:category', authMiddleware, getProductsByCategory);
router.get('/getAviableProducts', authMiddleware, getAviableProducts);

export default router

