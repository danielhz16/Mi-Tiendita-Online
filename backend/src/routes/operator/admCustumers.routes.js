import { customersWithMoreOrder } from "../../controllers/operator/admCustomers/admCustomersContoller.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();

router.get("/customersWithMoreOrder", operatorMiddleware, customersWithMoreOrder);

export default router;