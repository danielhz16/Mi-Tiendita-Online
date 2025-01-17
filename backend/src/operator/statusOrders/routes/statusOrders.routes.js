import { approveOrder, updateOrderStatus } from "../controller/statusOrdersController.js";
import { Router } from 'express';
import { operatorMiddleware } from '../../../middlewares/operatorMiddleware.js'

const router = Router();

router.patch('/updateOrderStatus/:id_order', operatorMiddleware, updateOrderStatus);
router.patch('/approveOrder', operatorMiddleware, approveOrder);

export default router;