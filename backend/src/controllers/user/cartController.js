import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const getCart = async (req, res) => {
    const id_user = req.user.id;
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('id_user', sql.Int, id_user)
        .execute('GetCart');
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};