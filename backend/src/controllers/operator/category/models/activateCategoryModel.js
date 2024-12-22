import { getConnections } from "../../../../config/database.js";
import sql from 'mssql';

export const activateCategoryModel = async ({ category_id }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('category_id', sql.Int, category_id)
        .execute('ActivateCategory');
        return response;
    } catch (error) {
        throw new Error(error)
    }
}