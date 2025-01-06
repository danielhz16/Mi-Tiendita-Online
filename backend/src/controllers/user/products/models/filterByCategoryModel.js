import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const filterByCategoryModel = async ({ category }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
            .input('category', sql.Int, category)
            .execute('filterByCategory');
        return response.recordset;
    } catch (error) {
        throw new Error('Error getting products by category');
    }
};