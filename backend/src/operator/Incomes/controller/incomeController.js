import { totalIncomeMonthService } from "../services/totalIncomeMonthService.js";
import { incomeTodayService } from "../services/incomeTodayService.js";


export const totalIncomeMonth = async (req, res) => {
    try {
        const response = await totalIncomeMonthService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const incomeToday = async (req, res) => {
    try {
        const response = await incomeTodayService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};
