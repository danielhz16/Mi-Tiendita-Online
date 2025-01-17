import { sequelize } from "../../../config/db.js";

export const editCategoryService = async ({ category_id, name }) => {
    try {
        const [response] = await sequelize.query(
            'EXEC EditCategory @category_id = :category_id, @name = :name',
            {
                replacements: { category_id, name },
                type: sequelize.QueryTypes.RAW 
            }
        );
        return response;
    } catch (error) {
        throw error;
    }
};
