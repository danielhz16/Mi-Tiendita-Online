import { getConnections } from "../../../../config/database.js";

export async function topUsersModel() {
    const pool = await getConnections()
    try {
        const response = await pool.request().query('SELECT * FROM CustomersWithMoreOrders')
        return response.recordset;
    } catch (error) {
        throw new Error(error);
    }
};