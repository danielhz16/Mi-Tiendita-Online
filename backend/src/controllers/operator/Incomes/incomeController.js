import { totalIncomeModel } from "./models/totalIncomeModel.js";
import { totalIncomeMonthModel } from "./models/totalIncomeMonthModel.js";
import { incomeTodayModel } from "./models/incomeTodayModel.js";

//* GET //si no hay ingresos, devolvera null

export const totalIncome = async (req, res) => {
    try {
        const response = await totalIncomeModel();
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const totalIncomeMonth = async (req, res) => {
    try {
        const response = await totalIncomeMonthModel();
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const incomeToday = async (req, res) => {
    try {
        const response = await incomeTodayModel();
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
