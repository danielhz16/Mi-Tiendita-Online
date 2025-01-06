import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const getOrdersByUserModel = async ({ id_user }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('id_user', sql.Int, id_user)
        .execute('GetOrderByUser');
        return response.recordset;
    } catch (error) {
        throw new Error(error);
    }
};