import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const searchProductsByNameModel = async ({ name }) => {
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('name', sql.VarChar, name)
        .execute('SearchProductsForName');
        return result.recordset;
    } catch (error) {
        throw new Error(error)
    }
} ;