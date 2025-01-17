import { sequelize } from "../../../config/db.js";

export const addStockService = async ({ product_id, stock }) => {
    try {
        const [response] = await sequelize.query('EXEC AddStock @product_id = :product_id, @stock = :stock', {
            replacements: { product_id, stock },
            type: sequelize.QueryTypes.RAW
        });
        return response;
    } catch (error) {
        return error;
    }
}