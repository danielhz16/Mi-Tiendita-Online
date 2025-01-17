import { sequelize } from "../../../config/db.js";

export const getOrdersService
 = async () => {
    try {
       const orders = await sequelize.query("SELECT * FROM GetOrders", {
           type: sequelize.QueryTypes.SELECT
       });
       return orders;
    } catch (error) {
        throw new Error(error.message);
    }
};