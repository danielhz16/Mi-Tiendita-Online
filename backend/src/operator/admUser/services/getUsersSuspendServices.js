import { sequelize } from "../../../config/db.js";

export const getUsersSuspendService = async () => {
    try {
        const [users] = sequelize.query('SELECT * FROM SuspendedUsers', {
           type: sequelize.QueryTypes.SELECT
        });
        return users;
    } catch (error) {
        throw new Error(error)
    }
};