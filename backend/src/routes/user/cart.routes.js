import { getCart, addProductToCart, updateQuantity, getCartId } from "../../controllers/user/cart/cartController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/getCart", authMiddleware, getCart);
router.get("/getCartId", authMiddleware, getCartId);
router.post("/addProductToCart", authMiddleware, addProductToCart);
router.post("/updateQuantity", authMiddleware, updateQuantity);

export default router;