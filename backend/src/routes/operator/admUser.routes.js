import { suspendUser, activateUser, getUsersSuspend } from "../../controllers/operator/admUserController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();

router.patch("/suspendUser", operatorMiddleware, suspendUser);
router.patch("/activateUser", operatorMiddleware, activateUser);
router.get("/getUsersSuspend", operatorMiddleware, getUsersSuspend);

export default router;