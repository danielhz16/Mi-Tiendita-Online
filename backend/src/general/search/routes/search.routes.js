import { searchProductsByName, searchProductsById } from "../controller/searchController.js";
import { Router } from "express";
import { authMiddleware } from "../../../middlewares/authMiddleware.js";

const router = Router();

router.get("/search/:name", authMiddleware, searchProductsByName); 
router.get("/searchProductsById/:id_product", authMiddleware, searchProductsById);

export default router;