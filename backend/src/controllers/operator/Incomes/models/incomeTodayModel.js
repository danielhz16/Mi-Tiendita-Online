import { getConnections } from "../../../../config/database.js";

export const incomeTodayModel = async () => {
    const pool = await getConnections();
    try {
        const response = await pool.request().query('SELECT * FROM IncomeToday');
        return response.recordset[0];
   
    } catch (error) {
        throw new Error(error);
    }
};