import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const updateQuantityModel = async ({ id_user, product_id, quantity }) => {
    const pool = await getConnections();
    console.log(quantity);
    try {
        const response = await pool.request()
            .input('id_user', sql.Int, id_user)
            .input('product_id', sql.Int, product_id)
            .input('new_value', sql.Int, quantity)
            .execute('UpdateQuantityOrder');
        return response;
    } catch (error) {
        throw new Error(error);
    }
}