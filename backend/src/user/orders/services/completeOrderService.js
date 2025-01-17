import { sequelize } from "../../../config/db.js";

export const completeOrderService = async ({ id_user, delivery_date }) => {
    try {
        const [response] = await sequelize.query('EXEC CompleteOrder @id_user = :id_user, @delivery_date = :delivery_date', {
            replacements: { id_user, delivery_date },
            type: sequelize.QueryTypes.RAW
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};