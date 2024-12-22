import { newStatus, editStatus } from "../../controllers/operator/status/statusController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();

router.post("/newStatus", operatorMiddleware, newStatus);
router.put("/editStatus", operatorMiddleware, editStatus);

export default router;