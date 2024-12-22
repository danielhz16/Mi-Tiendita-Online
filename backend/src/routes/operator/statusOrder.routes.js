import { approveOrder, cancelOrder, updateOrderStatus } from "../../controllers/operator/statusOrders/statusOrdersController.js";
import { Router } from "express";

const router = Router();

router.post("/approveOrder", approveOrder);    
router.post("/cancelOrder", cancelOrder);
router.put("/updateOrderStatus", updateOrderStatus);

export default router;