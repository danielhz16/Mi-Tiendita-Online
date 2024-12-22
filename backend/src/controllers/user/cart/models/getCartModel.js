import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const getCartModel = async ({ id_user }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('id_user', sql.Int, id_user)
        .execute('GetCart');
        return response;
    } catch (error) {
        return error;
    }
};