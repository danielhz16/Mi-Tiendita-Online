import { sequelize } from "../../../config/db.js";

export const cancelOrderService = async ({ id_order }) => {
    try {
        const [response] = await sequelize.query('EXEC CancelOrder @id_order = :id_order', {
            replacements: { id_order },
            type: sequelize.QueryTypes.RAW   
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};