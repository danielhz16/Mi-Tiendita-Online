import { sequelize } from "../../../config/db.js";

export const getUserService = async ({ id_user }) => {
    try {
        const [user] = await sequelize.query(
            'EXEC GetUserById @id_user = :id_user',
            {
                replacements: { id_user },
                type: sequelize.QueryTypes.SELECT,
            }
        );

        return user;
    } catch (error) {
        console.error("Error en getUserService:", error);
        throw new Error(error);
    }
};
