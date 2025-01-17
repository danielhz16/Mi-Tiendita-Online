import { sequelize } from "../../../config/db.js";

export const getOrderDetailsService = async ({ id_order, id_user }) => {
    try {
        const response = await sequelize.query(
            "EXEC GetOrderDetails @id_order = :id_order, @id_user = :id_user",
            {
                replacements: { id_order, id_user },
                type: sequelize.QueryTypes.SELECT,
            }
        )
        return response;
    } catch (error) {
        throw new Error(error);
    }
};