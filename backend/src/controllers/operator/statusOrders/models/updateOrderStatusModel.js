import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const updateOrderStatusModel = async ({ id_order, new_status }) => {
    const pool = await getConnections();
    try {
        const respose = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .input("new_status", sql.Int, new_status)
            .execute('ChangeOrderStatus');
        return respose;
    } catch (error) {
        throw new Error(error);
    }
};