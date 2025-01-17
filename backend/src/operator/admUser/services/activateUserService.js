import { sequelize } from "../../../config/db.js";

export const activateUserService = async ({ user_id }) => {
    try {
        const[response] = await sequelize.query('EXEC ActivateUser @user_id = :user_id', {
            replacements: {
                user_id
            },
            type: sequelize.QueryTypes.RAW
        })
        return response
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
};