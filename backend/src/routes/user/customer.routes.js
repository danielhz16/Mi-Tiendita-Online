import { newCustomers, updateCustomer } from "../../controllers/user/customer/customerController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.post("/newCustomer", authMiddleware, newCustomers);
router.put("/updateCustomer", authMiddleware, updateCustomer);

export default router;