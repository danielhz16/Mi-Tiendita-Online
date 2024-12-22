import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const deactivateProductModel = async ({ id_product }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
            .input('id_product', sql.Int, id_product)
            .execute('DeactivateProduct');
        return response;
    } catch (error) {
        throw new Error(error);
    }
};