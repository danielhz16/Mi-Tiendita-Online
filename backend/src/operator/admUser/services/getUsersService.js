import { sequelize } from "../../../config/db.js";

export const getUsersService = async () => {
    try {;
        const users = await sequelize.query('SELECT * FROM GetUsers', {
            type: sequelize.QueryTypes.SELECT
        });
        return users
    } catch (error) {
        throw new Error(error);
    }
};