import { sequelize } from "../../../config/db.js";

export const addProductToCartService = async ({ user_id, product_id,  quantity}) => {
    try {
        const [response] = await sequelize.query('EXEC AddProductToCart @user_id = :user_id, @product_id = :product_id, @quantity = :quantity', {
            replacements: {
                user_id, product_id, quantity
            },
            type: sequelize.QueryTypes.RAW
        })
        return response;
    } catch (error) {
        throw new Error(error)
    }
};