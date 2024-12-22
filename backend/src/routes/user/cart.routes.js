import { getCart } from "../../controllers/user/cart/cartController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/getCart", authMiddleware, getCart);    

export default router;