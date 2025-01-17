import { sequelize } from "../../../config/db.js";

export const incomeTodayService = async () => {
    try {
        const [response] = await sequelize.query('SELECT * FROM IncomeToday', { type: sequelize.QueryTypes.SELECT });
        return response
    } catch (error) {
        throw new Error(error);
    }
};