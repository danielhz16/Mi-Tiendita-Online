import { sequelize } from "../../../config/db.js";

export const createCategory = async ({ name, status_category, user_id }) => {
    try {
        const [category] = await sequelize.query(`EXEC NewCategory
             @name= :name,
             @status_category= :status_category,
             @user_id= :user_id
            `, {
                replacements: {
                    name, status_category, user_id
                },
                type: sequelize.QueryTypes.SELECT
            })
        return category;
    } catch (error) {
        throw new Error(error)
    }
};