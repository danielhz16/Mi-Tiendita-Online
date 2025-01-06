import { searchProductsByName, searchProductsById } from "../../controllers/general/search/searchProductsController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/search/:name", authMiddleware, searchProductsByName);
router.get("/searchProductsById/:id_product", authMiddleware, searchProductsById);

export default router;