import { sequelize } from "../../../config/db.js";

export const getCustomerService = async ({customer_id}) => {

    try {
        const [response] = await sequelize.query(
            `EXEC GetCustomerById @customer_id = :customer_id`,
            {
                replacements: { customer_id},
                type: sequelize.QueryTypes.SELECT
            }
        );
        return response; 
    } catch (error) {
        throw new Error(error);
    }       
}