import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const getOrders = async (req, res) => {
    const pool = await getConnections();
    try {
        const result = await pool.request().query("SELECT * FROM GetOrders");
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const filterOrders = async (req, res) => {
    const { status_id } = req.params;
    const pool = await getConnections();
    try {
        const result = await pool
            .request()
            .input("status_id", sql.Int, status_id)
            .execute('GetOrdersFromStatus');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};