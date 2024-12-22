import { getConnections } from "../../../../config/database.js";
import sql from 'mssql';

export const createCategory = async ({ name, status_category, user_id }) => {
    const pool = await getConnections();
    try {
        const response =  await pool.request()
        .input("name", sql.VarChar, name)
        .input("status_category", sql.Int, status_category)
        .input("user", sql.Int, user_id) 
        .execute("NewCategory")
        return response;
    } catch (error) {
        throw new Error(error)
    }
};