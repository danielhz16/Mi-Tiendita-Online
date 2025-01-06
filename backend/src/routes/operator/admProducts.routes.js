import { newProduct, updateProduct, deactivateProduct, activateProduct, getAllProducts, addStock, addStockByCode } from "../../controllers/operator/admProducts/admProductsController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.post('/newProduct', operatorMiddleware, upload.single('photo'), newProduct);
router.put("/updateProduct/:product_id", operatorMiddleware, upload.single('photo'), updateProduct); 
router.patch("/deactivateProduct/:id_product", operatorMiddleware, deactivateProduct);
router.patch("/activateProduct/:id_product", operatorMiddleware, activateProduct);
router.get("/getAllProducts", operatorMiddleware, getAllProducts);
router.patch("/addStock/:product_id", operatorMiddleware, addStock);
router.patch("/addStockByCode", operatorMiddleware, addStockByCode);

export default router;

