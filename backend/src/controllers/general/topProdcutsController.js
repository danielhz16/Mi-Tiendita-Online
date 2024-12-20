import { getConnections } from "../../config/database.js";

export const bestSellers = async (req, res) => {
    const pool = await getConnections();
    try {
        const result = await pool.request().query('SELECT * FROM BestSellers');
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({error});
        console.log(error);
    }
};
