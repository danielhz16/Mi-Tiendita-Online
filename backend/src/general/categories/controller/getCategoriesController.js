import { getCategoriesService } from "../services/getCategoriesService.js";

//get
export const getCategories = async (req, res) => {
    try {
        const response = await getCategoriesService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message); 
    }
};