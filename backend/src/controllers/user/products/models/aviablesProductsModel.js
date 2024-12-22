import { getConnections } from "../../../../config/database.js";

export const aviablesProductsModel = async () => {
    const pool = await getConnections();
    try {
        const response = await pool.request().query('SELECT * FROM AvailableProducts');
        return response.recordset;
    } catch (error) {
        console.log(error);
        throw new Error('Error getting aviable products');
    }
};