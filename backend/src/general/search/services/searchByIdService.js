import { sequelize } from "../../../config/db.js";

export const searchByIdService = async ({ id_product }) => {
    try {
        const  [product]  = await sequelize.query('EXEC GetProductById @id_product = :id_product', {
            replacements: {
                id_product
            },
            type: sequelize.QueryTypes.SELECT
        });
        return product;
    } catch (error) {
        throw new Error(error);
    }
} 