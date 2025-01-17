import { sequelize } from "../../../config/db.js";

export const updateQuantityService = async ({ id_user, product_id, quantity }) => {
    try {
        const response = await sequelize.query('EXEC UpdateQuantityOrder @id_user = :id_user, @product_id = :product_id, @new_value = :new_value', {
            replacements: {
                id_user, 
                product_id, 
                new_value: quantity 
            },
            type: sequelize.QueryTypes.SELECT
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
}
