import { addProductToOrder, deleteProductOrder, completeOrder } from "../../controllers/user/orders/ordersController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import Router from "express";

const router = Router();

router.post("/addProductToOrder", authMiddleware, addProductToOrder);
router.post("/deleteProductOrder", authMiddleware, deleteProductOrder);

//antes de completar la orden llenar datos de cliente, ruta ./customer.routes.js
router.post("/completeOrder", authMiddleware, completeOrder);

export default router;