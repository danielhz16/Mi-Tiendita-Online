import { sequelize } from "../../../config/db.js";

export const updateDataService = async ({id_products}) => {
    try {
        const [product] = await sequelize.query('EXEC UpdateProductData @id_products = :id_products', {
            replacements: {id_products},
            type: sequelize.QueryTypes.SELECT
        })
        return product
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}