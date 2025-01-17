import { getDataInvoice, getOrderDetails, getOrdersByUser, addProductToOrder, deleteProductOrder, completeOrder, cancelOrder } from "../controller/ordersController.js";
import { Router } from "express";
import { authMiddleware } from "../../../middlewares/authMiddleware.js";

const router = Router();

router.get('/getOrdersByUser', authMiddleware, getOrdersByUser);
router.get('/getDataInvoice/:id_order', authMiddleware, getDataInvoice);
router.get('/getOrderDetails/:id_order', authMiddleware, getOrderDetails);
router.post('/addProductToOrder', authMiddleware, addProductToOrder);
router.post('/deleteProductOrder', authMiddleware, deleteProductOrder);
router.patch('/cancelOrder/:id_order', authMiddleware, cancelOrder);
router.post('/completeOrder', authMiddleware, completeOrder);

export default router;