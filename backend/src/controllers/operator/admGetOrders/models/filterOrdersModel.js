import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const filterOrdersModel = async ({status_id}) => {
    const pool = await getConnections();
    try {
        const response = await pool
            .request()
            .input("status_id", sql.Int, status_id)
            .execute('GetOrdersFromStatus');
        return response.recordset;
    } catch (error) {
        throw new Error(error);
    }
};