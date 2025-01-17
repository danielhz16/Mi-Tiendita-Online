import { newCategory, getAllCategories, editCategory, deactivateCategory, activateCategory, updateInfoCategory } from "../controller/categoryController.js";
import { Router } from 'express'
import { operatorMiddleware} from '../../../middlewares/operatorMiddleware.js'
const router = Router();

router.post('/newCategory', operatorMiddleware, newCategory)
router.get('/getAllCategories', operatorMiddleware, getAllCategories)
router.put('/editCategory/:category_id', operatorMiddleware, editCategory)
router.patch('/deactivateCategory/:category_id', operatorMiddleware, deactivateCategory)
router.patch('/activateCategory/:category_id', operatorMiddleware, activateCategory)
router.get('/updateInfoCategory/:category_id', operatorMiddleware, updateInfoCategory)

export default router