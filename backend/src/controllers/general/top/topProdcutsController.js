import { getTopProductsModel } from "./models/topProductsModel.js";

//get
export const bestSellers = async (req, res) => {
    try {
        const result = await getTopProductsModel();
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
