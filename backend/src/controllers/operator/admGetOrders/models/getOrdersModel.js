import { getConnections } from "../../../../config/database.js";

export const getOrdersModel = async () => {
    const pool = await getConnections();
    try {
       const response = await pool.request().query("SELECT * FROM GetOrders");
       return response.recordset;
    } catch (error) {
        throw new Error(error.message);
    }
};