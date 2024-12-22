import { newProduct, updateProduct, deactivateProduct, activateProduct, getAllProducts, addStock } from "../../controllers/operator/admProducts/admProductsController.js";
import { operatorMiddleware } from "../../middlewares/operatorMiddleware.js";
import { Router } from "express";
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.post('/newProduct', operatorMiddleware, upload.single('photo'), newProduct);
router.put("/updateProduct", operatorMiddleware, upload.single('photo'), updateProduct); // Aquí es donde puedes actualizar con o sin foto
router.patch("/deactivateProduct", operatorMiddleware, deactivateProduct);
router.patch("/activateProduct", operatorMiddleware, activateProduct);
router.get("/getAllProducts", operatorMiddleware, getAllProducts);
router.patch("/addStock", operatorMiddleware, addStock);

export default router;

