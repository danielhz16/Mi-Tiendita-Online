import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const addProductModel = async ({ user_id, product_id, quantity }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('user_id', sql.Int, user_id)
        .input('product_id', sql.Int, product_id)
        .input('quantity', sql.Int, quantity)
        .execute('AddProductToOrder');
        return response;
    } catch (error) {
        throw new Error(error);
    }
};