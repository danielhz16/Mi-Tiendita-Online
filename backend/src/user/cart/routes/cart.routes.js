import { getCart, getCartId, addProductToCart, updateQuantity } from "../controller/cartController.js";
import { Router } from 'express'
import { authMiddleware } from '../../../middlewares/authMiddleware.js'

const router = Router();

router.get('/getCart', authMiddleware, getCart);
router.get('/getCartId', authMiddleware, getCartId);
router.post('/getCartId', authMiddleware, getCartId);
router.post('/addProductToCart', authMiddleware, addProductToCart);
router.post('/updateQuantity', authMiddleware, updateQuantity)

export default router