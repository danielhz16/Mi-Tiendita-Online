import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const addStockByCodeModel = async ({ code, stock }) => {
    try {
        const pool = await getConnections();
        const result = await pool.request()
            .input('code', sql.VarChar, code)
            .input('stock', sql.Float, stock)
            .execute('AddStockByCode');
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};