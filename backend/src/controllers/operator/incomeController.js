import { getConnections } from "../../config/database.js";

export const totalIncome = async (req, res) => {
    const pool = await getConnections();
    try {
        const result = await pool.request().query('SELECT * FROM ConfirmedIncome');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const totalIncomeMonth = async (req, res) => {
    const pool = await getConnections();
    try {
        const result = await pool.request().query('SELECT * FROM IncomeThisMonth');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const incomeToday = async (req, res) => {
    const pool = await getConnections();
    try {
        const result = await pool.request().query('SELECT * FROM IncomeToday');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};
