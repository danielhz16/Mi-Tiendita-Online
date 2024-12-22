import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const addProductModel = async ({ id_order, product_id, quantity }) => {
    const pool = await getConnections();
    try {
        const result = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .input("product_id", sql.Int, product_id)
            .input("quantity", sql.Int, quantity)
            .execute('AddProductToOrderById');
        return result.recordset;
    } catch (error) {
        throw new Error(error);
    }
};