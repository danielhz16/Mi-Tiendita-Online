import { getConnections } from "../../../../config/database.js";
import sql from 'mssql';

export const editCategoryModel = async ({ category_id, name }) => {
    const pool = await getConnections();
    try {
      const response = await pool.request()
        .input('category_id', sql.Int, category_id)
        .input('name', sql.VarChar, name)
        .execute('EditCategory');
        return response;
    } catch (error) {
        throw new Error(error)
    }
};