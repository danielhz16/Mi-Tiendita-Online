import { sequelize } from "../../../config/db.js";

export async function topUsersService() {
    try {
        const users = await sequelize.query('SELECT * FROM CustomersWithMoreOrders', {
            type: sequelize.QueryTypes.SELECT
        })
        return users;
    } catch (error) {
        throw new Error(error);
    }
};