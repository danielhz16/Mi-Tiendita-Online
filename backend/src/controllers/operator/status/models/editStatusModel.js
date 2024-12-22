import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const editStatusModel = async ({ id_status, name }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('id_status', sql.Int, id_status)
        .input('name', sql.VarChar, name)
        .execute('EditStatus');
        return response;
    } catch (error) {
     throw new Error(error);
    }
};