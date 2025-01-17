import { totalIncomeMonth, incomeToday } from "../controller/incomeController.js";
import { Router } from "express";
import { operatorMiddleware } from "../../../middlewares/operatorMiddleware.js";

const router = Router();

router.get("/totalIncomeMonth", operatorMiddleware, totalIncomeMonth);
router.get("/incomeToday", operatorMiddleware, incomeToday);

export default router;