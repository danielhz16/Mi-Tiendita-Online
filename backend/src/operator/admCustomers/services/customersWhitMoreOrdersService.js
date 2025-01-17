import { sequelize } from "../../../config/db.js";

export const getCustomersWithMoreOrdersService = async () => {
  try {
    const [customers] = await sequelize.query('SELECT * FROM CustomersWithMoreOrders', {
      type: sequelize.QueryTypes.SELECT
    });
    return customers; 
  } catch (error) {
    throw new Error(error.message);
  }
};
