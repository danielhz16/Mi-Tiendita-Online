import { getConnections } from "../../../../config/database.js";

export const totalIncomeModel = async () => {
    const pool = await getConnections();
    try {
        const response = await pool.request().query('SELECT * FROM ConfirmedIncome');
        return  response.recordset;
    } catch (error) {
        throw new Error(error);
    }
};