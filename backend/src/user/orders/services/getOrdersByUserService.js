import { sequelize } from "../../../config/db.js";

export const getOrdersByUserService = async ({ id_user }) => {
    try {    
        const response = await sequelize.query(
            'EXEC GetOrderByUser @id_user = :id_user', 
            {
                replacements: { id_user }, 
                type: sequelize.QueryTypes.SELECT, 
            }
        );
        return response;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching orders by user.');
    }
};
