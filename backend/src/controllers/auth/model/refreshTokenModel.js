import { getConnections } from "../../../config/database.js";
import sql from "mssql";

export const refreshTokenModel = async (id) => {
 const pool = await getConnections();
 const result = await pool.request()
 .input('id_user', sql.Int, id)
 .execute('GetUserById');
 return result.recordset[0];
}