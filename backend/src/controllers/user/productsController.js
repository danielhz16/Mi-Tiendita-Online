import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    const pool = await getConnections();

    try {
        const result = await pool.request()
            .input('category', sql.Int, category)
            .execute('filterByCategory');
        
        res.status(200).json(result.recordset); 
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};

export const getAviableProducts = async (req, res) => {
    const pool = await getConnections();
    try {
        const result = await pool.request().query('SELECT * FROM AvailableProducts');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};