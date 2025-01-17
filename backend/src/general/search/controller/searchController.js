import { searchByIdService } from "../services/searchByIdService.js";
import { searchByNameService } from "../services/searchByNameService.js";

export const searchProductsByName = async (req, res) => {
    const { name } = req.params;
    try {
        const response = await searchByNameService({ name });
        return res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const searchProductsById = async (req, res) => {
    const { id_product } = req.params;
    try {
        const response = await searchByIdService({ id_product });
        return res.status(200).json(response);      
    } catch (error) {
        res.status(500).json(error.message);
    }
};