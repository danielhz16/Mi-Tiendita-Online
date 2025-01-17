import { sequelize } from "../../../config/db.js";
import { QueryTypes } from "sequelize";

export const updateCategoryInfoService = async ({ id_category_products }) => {
    try {
        const [category] = await sequelize.query(
            'EXEC getUpdateInfoCategory @id_category_products = :id_category_products',
            {
                replacements: {id_category_products},
                type: QueryTypes.SELECT
            }
        );
        return category;
    } catch (error) {
        throw new Error(error.message);
    }
};