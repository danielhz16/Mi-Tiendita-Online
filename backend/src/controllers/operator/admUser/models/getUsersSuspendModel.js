import { getConnections } from "../../../../config/database.js";

export const getUsersSuspendModel = async () => {
    const pool = await getConnections();
    try {
        const response = await pool.request().query('SELECT * FROM SuspendedUsers');
        return response.recordset;
    } catch (error) {
        throw new Error(error)
    }
};