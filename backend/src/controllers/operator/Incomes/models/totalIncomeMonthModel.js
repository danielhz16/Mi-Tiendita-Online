import { getConnections } from "../../../../config/database.js";

export const totalIncomeMonthModel = async () => {
    const pool = await getConnections();
    try {
        const response = await pool.request().query('SELECT * FROM IncomeThisMonth');
        return  response.recordset;
    } catch (error) {
        throw new Error(error);
    }
};