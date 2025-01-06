import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const getDataInvoiceModel = async ({ id_order }) => {
    try {
        const pool = await getConnections();
        const result = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .execute("GetDataInvoice");
        return result.recordset[0];
    } catch (error) {
        throw new Error(error);
    }
};