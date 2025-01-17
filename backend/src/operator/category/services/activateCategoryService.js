import { sequelize } from "../../../config/db.js";

export const activateCategoryService = async ({ category_id }) => {
    try {
        const [response] = await sequelize.query('EXEC ActivateCategory @category_id = :category_id', {
            replacements: {
                category_id
            },
            type: sequelize.QueryTypes.RAW
        })
        return response;
    } catch (error) {
        throw new Error(error)
    }
}