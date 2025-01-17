import { getCategories } from "../controller/getCategoriesController.js";
import { authMiddleware } from '../../../middlewares/authMiddleware.js'
import { Router } from "express";

const router = Router();

router.get('/getCategories', authMiddleware, getCategories)

export default router