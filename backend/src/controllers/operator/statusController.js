import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const newStatus = async (req, res) => {
    const { name } = req.body;
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('name', sql.VarChar, name)
        .execute('NewStatus');
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};

export const editStatus = async (req, res) => {
    const { id_status, name } = req.body;
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('id_status', sql.Int, id_status)
        .input('name', sql.VarChar, name)
        .execute('EditStatus');
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error });
    }
};