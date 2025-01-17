import { sequelize } from "../../../config/db.js";

export const getCartService = async ({ id_user }) => {
    try {
        const products = await sequelize.query('EXEC GetCart @id_user= :id_user', {
            replacements: {
                id_user
            },
            type: sequelize.QueryTypes.SELECT
        })
        return products
    } catch (error) {
        throw new Error(error);
    }
};