import { searchProductsByNameModel } from "./models/searchByNameModel.js";
import { searchByIdModel } from "./models/searchByIdModel.js";

//get  //   /search/:name
export const searchProductsByName = async (req, res) => {
    const { name } = req.params;
    try {
        const response = await searchProductsByNameModel({ name });
        return res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const searchProductsById = async (req, res) => {
    const { id_product } = req.params;
    try {
        const response = await searchByIdModel({ id_product });
        return res.status(200).json(response);      
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};