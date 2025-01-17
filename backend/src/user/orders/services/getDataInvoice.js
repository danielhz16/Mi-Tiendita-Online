import { sequelize } from "../../../config/db.js";

export const getDataInvoiceModel = async ({ id_order }) => {
    try {
         const [response] = await sequelize.query(
            'EXEC GetDataInvoice @id_order = :id_order',
            {
                replacements: { id_order },
                type: sequelize.QueryTypes.SELECT
            }
        )
        return response;
    } catch (error) {
        throw new Error(error);
    }
};