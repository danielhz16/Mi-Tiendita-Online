import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const getUserModel = async (id) => {
    try {
        const pool = await getConnections();
        const result = await pool
            .request()
            .input("id_user", sql.Int, id)
            .execute("GetUserById");
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};