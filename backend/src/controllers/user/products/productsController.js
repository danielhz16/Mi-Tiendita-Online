import { aviablesProductsModel } from "./models/aviablesProductsModel.js";
import { filterByCategoryModel } from "./models/filterByCategoryModel.js";

//get/id
export const getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const response = await filterByCategoryModel({ category });
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get
export const getAviableProducts = async (req, res) => {
    try {
        const response = await aviablesProductsModel();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};