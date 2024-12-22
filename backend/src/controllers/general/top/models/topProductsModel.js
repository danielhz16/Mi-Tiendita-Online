import { getConnections } from '../../../../config/database.js'

export const getTopProductsModel = async () => {
    const pool = await getConnections()
    try {
        const response = await pool.request().query('SELECT * FROM BestSellers');
        return response.recordset;
    } catch (error) {
        throw new Error(error)
    }
};