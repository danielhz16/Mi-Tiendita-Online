import { getAllCategories, newCategory,  deactivateCategory, activateCategory, editCategory } from "../../controllers/operator/category/categoryController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";

const router = Router();    

router.get("/getAllCategories/", operatorMiddleware, getAllCategories);
router.post("/newCategory", operatorMiddleware, newCategory);
router.put("/editCategory/:category_id", operatorMiddleware, editCategory);
router.patch("/deactivateCategory/:category_id", operatorMiddleware, deactivateCategory);
router.patch("/activateCategory/:category_id", operatorMiddleware, activateCategory);

export default router;