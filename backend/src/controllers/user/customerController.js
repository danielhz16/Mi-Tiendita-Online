import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const newCustomers = async (req, res) => {
    const {legal_name, trade_name, delivery_address, phone, email} = req.body;
    const id_user = req.user.id;
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('legal_name', sql.VarChar, legal_name)
        .input('trade_name', sql.VarChar, trade_name)
        .input('delivery_address', sql.VarChar, delivery_address)
        .input('phone', sql.VarChar, phone)
        .input('email', sql.VarChar, email)
        .input('id_user', sql.Int, id_user)
        .execute('NewCustomer');
        res.status(200).json({response});
    } catch (error) {
        res.status(500).json({error});
    }
};

export const updateCustomers = async (req, res) => {
    const {legal_name, trade_name, delivery_address, phone, email} = req.body;
    const id_user = req.user.id;
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
        res.status(200).json({response});
    } catch (error) {
        res.status(500).json({error});
    }
};