import { sequelize } from "../../../config/db.js";

export const searchByNameService = async ({ name }) => {
    try {
        const products = await sequelize.query('EXEC GetProductByName @name = :name', {
            replacements: {
                name
            },
            type: sequelize.QueryTypes.SELECT
        });
        return products;
    } catch (error) {
        throw new Error(error);
    }
}