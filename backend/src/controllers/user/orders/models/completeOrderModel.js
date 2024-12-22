import { getConnections } from "../../../../config/database.js";
import sql from 'mssql';

export const completeOrderModel = async ({ id_user, delivery_date }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('id_user', sql.Int, id_user)
        .input('delivery_date', sql.Date, delivery_date)
        .execute('CompleteOrder');
        return response;
    } catch (error) {
        throw new Error(error);
    }
};