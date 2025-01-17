import { sequelize } from "../../../config/db.js";

export const activateProductService = async ({ id_product }) => {
    try {
        const [response] = await sequelize.query('EXEC ActivateProduct @id_product = :id_product',{
                replacements: {
                    id_product
                },
                type: sequelize.QueryTypes.RAW
            });
        return response;
    } catch (error) {
        throw new Error(error);
    }
}