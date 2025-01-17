import { sequelize } from "../../../config/db.js";

export const filterOrdersService = async ({ status_id }) => {
    try {
        const orders = await sequelize.query('EXEC GetOrdersFromStatus :status_id', {
            replacements: { status_id },
            type: sequelize.QueryTypes.SELECT, 
        });
        return orders;
    } catch (error) {
        throw new Error(`Error al ejecutar el servicio: ${error.message}`);
    }
};
