import { addProductToOrder, deleteProductOrder, completeOrder } from "../../controllers/user/ordersController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import Router from "express";

const router = Router();

router.post("/addProductToOrder", authMiddleware, addProductToOrder);
router.post("/deleteProductOrder", authMiddleware, deleteProductOrder);

//primero llenar datos en newCustomer y luego completar la orden, ruta ./customer.routes.js
router.post("/completeOrder", authMiddleware, completeOrder);

export default router;