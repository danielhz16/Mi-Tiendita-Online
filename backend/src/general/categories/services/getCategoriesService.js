import { sequelize } from "../../../config/db.js";

export const getCategoriesService = async () => {
    try {
        const categories = await sequelize.query(`SELECT * FROM GetCategories`, {
            type: sequelize.QueryTypes.SELECT
        });
        return categories;
    } catch (error) {
        throw new Error(`Error en getCategoriesService: ${error.message}`);
    }
};
