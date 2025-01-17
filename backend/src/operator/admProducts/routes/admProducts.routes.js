import { newProduct, updateProduct, getAllProducts, deactivateProduct, activateProduct, addStock, addStockByCode, updateData } from "../controller/admProductsController.js";
import { Router } from "express";
import { operatorMiddleware } from "../../../middlewares/operatorMiddleware.js";
import multer from 'multer'

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post('/newProduct', operatorMiddleware, upload.single('photo'), newProduct);
router.put("/updateProduct/:product_id", operatorMiddleware, upload.single('photo'), updateProduct); 
router.patch("/deactivateProduct/:id_product", operatorMiddleware, deactivateProduct);
router.patch("/activateProduct/:id_product", operatorMiddleware, activateProduct);
router.get("/getAllProducts", operatorMiddleware, getAllProducts);
router.patch("/addStock/:product_id", operatorMiddleware, addStock);
router.patch("/addStockByCode", operatorMiddleware, addStockByCode);
router.get("/updateData/:id_products", operatorMiddleware, updateData)
export default router;
