import { newCategory,  deactivateCategory, activateCategory, editCategory } from "../../controllers/operator/category/categoryController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();    

router.post("/newCategory", operatorMiddleware, newCategory);
router.put("/editCategory", operatorMiddleware, editCategory);
router.patch("/deactivateCategory", operatorMiddleware, deactivateCategory);
router.patch("/activateCategory", operatorMiddleware, activateCategory);

export default router;