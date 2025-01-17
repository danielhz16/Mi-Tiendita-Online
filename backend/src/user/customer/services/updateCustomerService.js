import { sequelize } from "../../../config/db.js";

export const updateCustomerService = async ({ legal_name, trade_name, delivery_address, phone, email, id_user }) => {
    try {
        const [response] = await sequelize.query(`
            EXEC UpdateCustomer 
            @legal_name = :legal_name,
            @trade_name = :trade_name,
            @delivery_address = :delivery_address,
            @phone = :phone,
            @email = :email,
            @id_user = :id_user
            `, {
                replacements: {
                    legal_name,
                    trade_name,
                    delivery_address,
                    phone,
                    email,
                    id_user
                },
                type: sequelize.QueryTypes.RAW
            })    
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
