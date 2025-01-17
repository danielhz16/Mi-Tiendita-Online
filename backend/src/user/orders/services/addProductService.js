import { sequelize } from "../../../config/db.js";

export const addProductService = async ({ user_id, product_id, quantity }) => {
    try {
       const [response] = await sequelize.query(`EXEC AddProductToOrder @user_id = :user_id, @product_id = :product_id, @quantity = :quantity`, {
            replacements: { user_id, product_id, quantity },
            type: sequelize.QueryTypes.RAW
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};