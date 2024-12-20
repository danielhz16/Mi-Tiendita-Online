import { getOrders, filterOrders } from "../../controllers/operator/AdmgetOrdersController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/getOrders", operatorMiddleware, getOrders);
router.get("/filterOrders/:status_id", operatorMiddleware, filterOrders);

export default router;