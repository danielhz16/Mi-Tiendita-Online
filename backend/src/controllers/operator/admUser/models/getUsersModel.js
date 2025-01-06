import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const getUsersModel = async () => {
    const pool = await getConnections();
    try {;
        const response = await pool.request().query('SELECT * FROM GetUsers');
        return response.recordset;
    } catch (error) {
        throw new Error(error);
    }
};