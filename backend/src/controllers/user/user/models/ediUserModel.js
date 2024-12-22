import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const editUserModel = async (full_name, birth_date, email, id_user) => {
    const pool = await getConnections();

    try {
        const result = await pool.request()
            .input('full_name', sql.VarChar, full_name)
            .input('birth_date', sql.Date, birth_date)
            .input('email', sql.VarChar, email)
            .input('id_user', sql.Int, id_user)
            .execute('EditUser');

        return result;
    } catch (error) {
        throw new Error(error);
    }
};