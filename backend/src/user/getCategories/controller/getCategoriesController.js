import { getCategoriesService } from "../services/getCategoriesService.js";

//get
export const getCategories = async (req, res) => {
    try {
        const categories = await getCategoriesService();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error.message);
    }
};