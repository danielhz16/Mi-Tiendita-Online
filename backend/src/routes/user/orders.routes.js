import { addProductToOrder, deleteProductOrder, completeOrder, getDataInvoice, getOrderDetails, getOrdersByUser, cancelOrder } from "../../controllers/user/orders/ordersController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import Router from "express";

const router = Router();
router.get("/getDataInvoice/:id_order", authMiddleware, getDataInvoice);
router.get("/getOrderDetails/:id_order", authMiddleware, getOrderDetails);
router.get("/getOrdersByUser", authMiddleware, getOrdersByUser);
router.post("/addProductToOrder", authMiddleware, addProductToOrder);
router.post("/deleteProductOrder", authMiddleware, deleteProductOrder);
router.patch("/cancelOrder/:id_order", authMiddleware, cancelOrder);
//antes de completar la orden llenar datos de cliente, ruta ./customer.routes.js
router.post("/completeOrder", authMiddleware, completeOrder);

export default router;