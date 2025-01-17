import { customersWithMoreOrder, getCustomers, getCustomerById, updateCustomerById } from "../controller/admCustomersContoller.js";
import { Router } from "express";
import { operatorMiddleware } from "../../../middlewares/operatorMiddleware.js";

const router = Router();
router.get("/customersWithMoreOrder", operatorMiddleware, customersWithMoreOrder);
router.get("/getCustomers", operatorMiddleware, getCustomers);
router.get("/getCustomerById/:customer_id", operatorMiddleware, getCustomerById);
router.put("/updateCustomerById/:id_customer", operatorMiddleware, updateCustomerById);
export default router;


