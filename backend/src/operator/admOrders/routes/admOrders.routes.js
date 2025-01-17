import { filterOrders, getOrders } from "../controller/admOrdersController.js";
import { Router } from "express";
import { operatorMiddleware } from "../../../middlewares/operatorMiddleware.js";

const router = Router();

router.get("/getOrders", operatorMiddleware, getOrders);
router.get("/filterOrders/:status_id", operatorMiddleware, filterOrders);

export default router;