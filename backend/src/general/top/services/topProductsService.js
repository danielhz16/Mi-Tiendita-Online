import { sequelize } from "../../../config/db.js";

export const topProductsService = async () => {
    try {
        const products = await sequelize.query(
            'SELECT * FROM BestSellers',
            {
                type: sequelize.QueryTypes.SELECT,
            }
        );
        return products;
    } catch (error) {
        throw new Error(error);
    }
}