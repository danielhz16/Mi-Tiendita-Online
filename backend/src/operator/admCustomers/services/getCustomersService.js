import { sequelize } from "../../../config/db.js";

export const getCustomersService = async () => {
 try {
    const customers = await sequelize.query('SELECT * FROM Customers', {
        type: sequelize.QueryTypes.SELECT
    });
    return customers
 } catch (error) {
    throw new Error(error);
 }
}