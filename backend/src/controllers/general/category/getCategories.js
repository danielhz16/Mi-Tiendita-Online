import { getCategoriesModel } from "./models/getCategoriesModel.js";

export const getCategories = async (req, res) => {
    try {
        const categorys = await getCategoriesModel();
        res.status(200).json(categorys);
    } catch (error) {
        res.status(500).json(error.message);
    }
};