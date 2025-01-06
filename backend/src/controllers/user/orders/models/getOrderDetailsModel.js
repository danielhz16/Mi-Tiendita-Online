import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const getOrderDetailsModel = async ({ id_order, id_user }) => {
    const pool = await getConnections();
    try {
        const result = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .input("id_user", sql.Int, id_user)
            .execute("GetOrderDetails");
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};