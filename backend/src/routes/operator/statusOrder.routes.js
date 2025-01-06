import { approveOrder, updateOrderStatus } from "../../controllers/operator/statusOrders/statusOrdersController.js";
import { Router } from "express";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";

const router = Router();

router.post("/approveOrder",operatorMiddleware, approveOrder);    
router.patch("/updateOrderStatus/:id_order", operatorMiddleware, updateOrderStatus);

export default router;