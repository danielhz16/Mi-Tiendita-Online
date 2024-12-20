import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const approveOrder = async (req, res) => {
    const { id_order } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .execute('approveOrder');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const cancelOrder = async (req, res) => {
    const { id_order } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .execute('cancelOrder');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const updateOrderStatus = async (req, res) => {
    const { id_order, new_status } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .input("new_status", sql.Int, new_status)
            .execute('ChangeOrderStatus');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};


