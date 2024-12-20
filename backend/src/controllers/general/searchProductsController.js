import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const searchProductsByName = async (req, res) => {
    const { name } = req.params;
    console.log(name);
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('name', sql.VarChar, name)
        .execute('SearchProductsForName');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};