import { sequelize } from "../../../config/db.js";

export const updateCustomerService = async ({legal_name, trade_name, delivery_address, phone, email, id_customer }) => {
    try {
        const [response] = await sequelize.query(`EXEC UpdateCustomerById @legal_name = :legal_name, @trade_name = :trade_name, @delivery_address = :delivery_address, @phone = :phone, @email = :email, @id_customer = :id_customer`, {
            replacements: {
                legal_name,
                trade_name,
                delivery_address,
                phone,
                email,
                id_customer
            },
            type: sequelize.QueryTypes.RAW
        });
      return response;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
} 