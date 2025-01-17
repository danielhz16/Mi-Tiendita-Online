import { createProduct } from "../services/newProductService.js";
import { updateProductService } from "../services/updateProductService.js";
import { deactivateProductService } from "../services/deactivateProductService.js";
import { activateProductService } from "../services/activateProductService.js";
import { addStockService } from "../services/addStockService.js";
import { addStockByCodeService } from "../services/addStockByCodeService.js";
import { getAllProductsService } from "../services/getAllProductsService.js";
import { updateDataService } from "../services/updateDataService.js";

//post
export const newProduct = async (req, res) => {
    const { category, name, brand, code, stock, status_product, price, description } = req.body;
    const photo = req.file ? req.file.buffer : null;
    const user = req.user.id;
    try {
        const response = await createProduct({ category, user, name, brand, code, stock, status_product, price, description, photo });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};

//put
export const updateProduct = async (req, res) => {
    const { name, description, stock, brand, price, code, id_category_products } = req.body;
    const product_id = req.params.product_id;
    const photo = req.file ? req.file.buffer : null;
    try {
        const response = await updateProductService({ product_id, name, description, stock, brand, price, code, id_category_products, photo });
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
};

//patch
export const deactivateProduct = async (req, res) => {
    const {id_product} = req.params;
    try {
        const response  = await deactivateProductService({id_product});
        res.status(200).json('Producto desactivado');
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};

//patch
export const activateProduct = async (req, res) => {
  const {id_product} = req.params;
  try {                                         
      const response = await activateProductService({id_product});
      res.status(200).json('Producto activado');        
}   catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }           
};

//patch
export const addStock = async (req, res) => {
    const {stock} = req.body;
    const product_id = req.params.product_id;
    try {
        const response = await addStockService({ product_id, stock });
        res.status(200).json('stock actualizado');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get
export const getAllProducts = async (req, res) => {
    try {
        const response = await getAllProductsService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};

//patch
export const addStockByCode = async (req, res) => {
    const {code, stock} = req.body;
    try {
        const response = await addStockByCodeService({ code, stock });
        res.status(200).json('stock actualizado');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get 
export const updateData = async (req, res) => {
    const { id_products } = req.params;  
    try {
        const response = await updateDataService({id_products})
        return response;
    } catch (error) {
        res.status(500).json(error.message);
    }
}