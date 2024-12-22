import { createProduct } from "./models/newProductModel.js";
import { updateProductModel } from "./models/updateProductModel.js";
import { deactivateProductModel } from "./models/deactivateProductModel.js";
import { activateProductModel } from "./models/activateProductModel.js";
import { addStockModel } from "./models/addStockModel.js";
import { getAllProductsModel } from "./models/getAllProductsModel.js";

//post
export const newProduct = async (req, res) => {
    const { category, name, brand, code, stock, status_product, price, description } = req.body;
    const photo = req.file ? req.file.buffer : null; 

    try {
        const response = await createProduct({ category, name, brand, code, stock, status_product, price, description, photo });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//put
export const updateProduct = async (req, res) => {
    const { product_id, name, description, stock, brand, price, code, category_id } = req.body;
    const photo = req.file ? req.file.buffer : null;
    try {
        const response = await updateProductModel({ product_id, name, description, stock, brand, price, code, category_id, photo });
        res.status(200).json({ response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

//patch
export const deactivateProduct = async (req, res) => {
    const {id_product} = req.body;
    try {
        const response  = await deactivateProductModel({id_product});
        res.status(200).json({response});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//patch
export const activateProduct = async (req, res) => {
  const {id_product} = req.body;
  try {                                         
      const response = await activateProductModel({id_product});
      res.status(200).json({response});        
}   catch (error) {
        res.status(500).json({error: error.message});
    }           
};

//patch
export const addStock = async (req, res) => {
    const {product_id, stock} = req.body;
    try {
        const response = await addStockModel({ product_id, stock });
        res.status(200).json({response});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//get
export const getAllProducts = async (req, res) => {
    try {
        const response = await getAllProductsModel();
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};

