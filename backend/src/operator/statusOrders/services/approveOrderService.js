import { QueryTypes } from "sequelize";
import { sequelize } from "../../../config/db.js";

export const approveOrderService = async ({ id_order }) => {
    try {
        const respose = await sequelize.query('EXEC approveOrder @id_order = :id_order', {
            replacements: { id_order },
            type: QueryTypes.RAW
        })
        return respose;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
};