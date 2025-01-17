import { sequelize } from "../../../config/db.js";

export const suspendUserService = async ({ user_id }) => {
    try {
         const [response] = await sequelize.query('EXEC SuspendUser @user_id = :user_id', {
            replacements: {
                user_id
            },
            type: sequelize.QueryTypes.RAW
         });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};