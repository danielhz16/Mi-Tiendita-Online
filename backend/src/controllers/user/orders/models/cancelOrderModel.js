import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const cancelOrderModel = async ({ id_order }) => {
    const pool = await getConnections();
    try {
        const respose = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .execute('CancelOrder');
        return respose;
    } catch (error) {
        throw new Error(error);
    }
};