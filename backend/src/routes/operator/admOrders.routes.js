import { addProductToOrderById, deleteProductByOrderId } from "../../controllers/operator/admOrders/admOrdersContoller.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();

router.post("/addProductToOrderById", operatorMiddleware, addProductToOrderById);
router.post("/deleteProductByOrderId", operatorMiddleware, deleteProductByOrderId);

export default router;