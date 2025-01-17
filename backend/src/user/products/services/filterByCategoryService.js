import { sequelize } from "../../../config/db.js";

export const filterByCategoryService = async ({ category }) => {
    try {
        const products = await sequelize.query('execute filterByCategory @category = :category', {
            replacements: { category },
            type: sequelize.QueryTypes.SELECT   
        })
        return products
    } catch (error) {
        throw new Error(error);
    }
};