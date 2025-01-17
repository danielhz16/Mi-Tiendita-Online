import { sequelize } from "../../../config/db.js";

export const addStockByCodeService = async ({ code, stock }) => {
    try {
        const [response] = await sequelize.query('EXEC AddStockByCode @code = :code, @stock = :stock', {
            replacements: { code, stock },
            type: sequelize.QueryTypes.RAW
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};