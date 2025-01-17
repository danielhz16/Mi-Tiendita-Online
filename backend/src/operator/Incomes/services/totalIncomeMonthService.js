import { sequelize } from "../../../config/db.js";

export const totalIncomeMonthService = async () => {
    try {
        const [response] = await sequelize.query('SELECT * FROM IncomeThisMonth', { type: sequelize.QueryTypes.SELECT });
        return response
    } catch (error) {
        throw new Error(error);
    }
};