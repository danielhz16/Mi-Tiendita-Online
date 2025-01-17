import { sequelize } from "../../../config/db.js";

export const aviablesProductsService = async () => {
    try {
        const products = await sequelize.query('SELECT * FROM AvailableProducts', {
            type: sequelize.QueryTypes.SELECT
    });
        return products;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};  