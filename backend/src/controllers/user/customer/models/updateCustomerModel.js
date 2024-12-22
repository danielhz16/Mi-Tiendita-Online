import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const updateCustomerModel = async ({ legal_name, trade_name, delivery_address, phone, email, id_user }) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('legal_name', sql.VarChar, legal_name)
        .input('trade_name', sql.VarChar, trade_name)
        .input('delivery_address', sql.VarChar, delivery_address)
        .input('phone', sql.VarChar, phone)
        .input('email', sql.VarChar, email)
        .input('id_user', sql.Int, id_user)
        .execute('UpdateCustomer');
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
