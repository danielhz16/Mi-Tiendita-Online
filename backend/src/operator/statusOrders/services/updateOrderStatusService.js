import { QueryTypes } from 'sequelize';
import { sequelize } from '../../../config/db.js'

export const updateOrderStatusService = async ({ id_order, new_status }) => {
    try {
        const [respose] = await sequelize.query('EXEC ChangeOrderStatus @id_order = :id_order, @new_status = :new_status', {
            replacements: {
                id_order, new_status
            },
            type: QueryTypes.RAW
        })
        return respose
    } catch (error) {
        throw new Error(error);
    }
};