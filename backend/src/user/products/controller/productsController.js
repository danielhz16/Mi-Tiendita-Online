import { aviablesProductsService } from "../services/aviablesProductsService.js";
import { filterByCategoryService } from "../services/filterByCategoryService.js";

//get
export const getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const response = await filterByCategoryService({ category });
        res.status(200).json(response); 
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get
export const getAviableProducts = async (req, res) => {
    try {
        const response = await aviablesProductsService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};