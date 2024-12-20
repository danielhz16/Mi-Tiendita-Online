import { totalIncome, totalIncomeMonth, incomeToday } from "../../controllers/operator/incomeController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();

//primero aprovar ordenes en ./statusOrder.routes.js
router.get("/totalIncome", operatorMiddleware, totalIncome);
router.get("/totalIncomeMonth", operatorMiddleware, totalIncomeMonth);  
router.get("/incomeToday", operatorMiddleware, incomeToday);

export default router;