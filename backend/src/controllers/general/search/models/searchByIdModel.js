import { getConnections } from "../../../../config/database.js"
import sql from "mssql";

export const searchByIdModel = async ({ id_product }) => {
 const pool = await getConnections();
 const response = await pool.request()
 .input('id_product', sql.Int, id_product)
 .execute('GetProductById');
 return response.recordset;
};