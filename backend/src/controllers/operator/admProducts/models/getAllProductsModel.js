import { getConnections } from "../../../../config/database.js";

export const getAllProductsModel = async () => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .query('SELECT * FROM GetProducts');
        return response.recordset;
    } catch (error) {
        throw new Error(error);
    }
};