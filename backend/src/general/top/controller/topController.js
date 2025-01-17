import { topProductsService } from "../services/topProductsService.js";

//get
export const bestSellers = async (req, res) => {
    try {
        const result = await topProductsService();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};
