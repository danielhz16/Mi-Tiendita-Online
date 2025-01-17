import { sequelize } from "../../../config/db.js";

export const getCartIdService = async ({ id_user }) => {
    const pool = await getConnections();
    try {
        const [products] = await sequelize.query('EXEC GetCartId @id_user = :id_user', {
            replacements: {
                id_user
            },
            type: sequelize.QueryTypes.SELECT
        })       
        return products;
    } catch (error) {
        throw new Error(error);
    }
};