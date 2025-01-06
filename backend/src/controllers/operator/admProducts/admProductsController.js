import { createProduct } from "./models/newProductModel.js";
import { updateProductModel } from "./models/updateProductModel.js";
import { deactivateProductModel } from "./models/deactivateProductModel.js";
import { activateProductModel } from "./models/activateProductModel.js";
import { addStockModel } from "./models/addStockModel.js";
import { getAllProductsModel } from "./models/getAllProductsModel.js";
import { addStockByCodeModel } from "./models/addStockByCodeModel.js";

//post
export const newProduct = async (req, res) => {
    const { category, name, brand, code, stock, status_product, price, description } = req.body;
    const photo = req.file ? req.file.buffer : null;
    const user = req.user.id;
    try {
        const response = await createProduct({ category, user, name, brand, code, stock, status_product, price, description, photo });
        res.status(200).json('Producto creado');
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
        const response = await updateProductModel({ product_id, name, description, stock, brand, price, code, id_category_products, photo });
        res.status(200).json('Producto actualizado');
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
};

//patch
export const deactivateProduct = async (req, res) => {
    const {id_product} = req.params;
    try {
        const response  = await deactivateProductModel({id_product});
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
      const response = await activateProductModel({id_product});
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
        const response = await addStockModel({ product_id, stock });
        res.status(200).json('stock actualizado');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get
export const getAllProducts = async (req, res) => {
    try {
        const response = await getAllProductsModel();
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
        const response = await addStockByCodeModel({ code, stock });
        res.status(200).json('stock actualizado');
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};
