import { sequelize } from "../../../config/db.js";

export const getAllCategoriesService = async () => {
    try {
        const categories = await sequelize.query("SELECT * FROM AllInfoCategories", {
            type: sequelize.QueryTypes.SELECT
        });
        return categories;
    } catch (error) {
        throw new Error(error); 
    }    
}