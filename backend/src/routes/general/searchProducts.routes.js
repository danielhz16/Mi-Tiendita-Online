import { searchProductsByName } from "../../controllers/general/searchProductsController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/search/:name", authMiddleware, searchProductsByName);

export default router;