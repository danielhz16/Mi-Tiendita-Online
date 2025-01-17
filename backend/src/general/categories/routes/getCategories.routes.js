import { getCategories } from "../controller/getCategoriesController.js";
import { Router } from "express";
import { authMiddleware } from "../../../middlewares/authMiddleware.js";

const router = Router();

router.get("/getCategories", authMiddleware, getCategories);