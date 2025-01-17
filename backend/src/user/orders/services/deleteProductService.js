import { sequelize } from "../../../config/db.js";

export const deleteProductService = async ({ id_user, product_id, quantity }) => {
    try {
        const [response] = await sequelize.query('EXEC DeleteProductOrder @id_user = :id_user, @product_id = :product_id, @quantity = :quantity', {
            replacements: { id_user, product_id, quantity },
            type: sequelize.QueryTypes.RAW
        });
        return response;
    } catch (error) {
        throw new Error(error)
    }
};