import { sequelize } from "../../../config/db.js";

export const editUserService = async (full_name, birth_date, email, id_user) => {
    try {
        const [response] = await sequelize.query(`EXEC EditUser @full_name = :full_name, @birth_date = :birth_date, @email = :email, @id_user = :id_user;`, {
            replacements: { full_name, birth_date, email, id_user },
            type: sequelize.QueryTypes.RAW
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};