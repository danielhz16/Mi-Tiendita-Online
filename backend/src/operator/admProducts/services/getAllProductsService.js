import { sequelize } from "../../../config/db.js";

export const getAllProductsService = async () => {
    try {
        const response = await sequelize.query('SELECT * FROM GetProducts', {
            type: sequelize.QueryTypes.SELECT,
            raw: true,
        });
        return response; 
    } catch (error) {
        throw new Error(error);
    }
};
