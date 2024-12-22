import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const activateUserModel = async ({ user_id }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('user_id', sql.Int, user_id)
        .execute('ActivateUser');
    return response;
    } catch (error) {
        throw new Error(error)
    }
};