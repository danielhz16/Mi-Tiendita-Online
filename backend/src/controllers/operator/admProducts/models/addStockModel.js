import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const addStockModel = async ({ product_id, stock }) => {
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('product_id', sql.Int, product_id)
        .input('stock', sql.Float, stock)
        .execute('AddStock');
        return result;
    } catch (error) {
        return error;
    }
}