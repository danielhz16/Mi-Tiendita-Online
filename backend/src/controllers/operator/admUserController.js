import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const suspendUser = async (req, res) => {
    const { user_id } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('user_id', sql.Int, user_id)
        .execute('SuspendUser');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const activateUser = async (req, res) => {
    const { user_id } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('user_id', sql.Int, user_id)
        .execute('ActivateUser');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUsersSuspend =  async(req, res) => {
 const pool = await getConnections();                             
 try {
    const result = await pool.request().query('SELECT * FROM SuspendedUsers')  
    res.status(200).json({result})                                                                                                                                                                                                                         
 } catch (error) {
    res.status(500).json({error})
 }
};

