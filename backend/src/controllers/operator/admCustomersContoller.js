import { getConnections } from "../../config/database.js";

export const customersWithMoreOrder = async (req, res) => {
    const pool = await getConnections();                            
    try {
        const result = await pool.request().query('SELECT * FROM CustomersWithMoreOrders');
        res.status(200).json({ result });   
    }           
    catch (error) {
        res.status(500).json({error});        
    }
};