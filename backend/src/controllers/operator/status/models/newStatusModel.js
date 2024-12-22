import { getConnections } from "../../../../config/database.js";

export const createStatus = async ({ name }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('name', name)
        .execute('NewStatus');
        return response;
    } catch (error) {
     throw new Error(error);
    }
};