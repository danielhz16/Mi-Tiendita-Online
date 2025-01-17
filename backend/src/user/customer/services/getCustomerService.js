import { sequelize } from "../../../config/db.js";

export const getCustomerService = async ({ id_user }) => {
    try {
        const customer = await sequelize.query('EXEC GetCustomer @id_user = :id_user', {
            replacements : {
                id_user
            },
            type: sequelize.QueryTypes.SELECT
        })
        return customer
    } catch (error) {
        throw new Error(error);
    }
};