import { newCustomers, updateCustomers } from "../../controllers/user/customerController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";

const router = Router();

router.post("/newCustomer", authMiddleware, newCustomers);
router.put("/updateCustomer", authMiddleware, updateCustomers);

export default router;