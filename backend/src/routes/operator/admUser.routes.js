import { suspendUser, activateUser, getUsersSuspend, getUsers, topUsers } from "../../controllers/operator/admUser/admUserController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();

router.patch("/suspendUser/:user_id", operatorMiddleware, suspendUser);
router.patch("/activateUser/:user_id", operatorMiddleware, activateUser);
router.get("/getUsersSuspend", operatorMiddleware, getUsersSuspend);
router.get("/getUsers", operatorMiddleware, getUsers);
router.get("/topUsers", operatorMiddleware, topUsers);

export default router;   