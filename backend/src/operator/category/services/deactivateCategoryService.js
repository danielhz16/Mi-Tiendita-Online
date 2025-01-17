import { sequelize } from "../../../config/db.js";

export const deactivateCategoryService = async ({ category_id }) => {
    try {
        const [response] = await sequelize.query(
            'EXEC DeactivateCategory @category_id = :category_id',
            {
                replacements: { category_id },
                type: sequelize.QueryTypes.RAW, 
            }
        );
        return response;
    } catch (error) {
        throw error;
    }
};
