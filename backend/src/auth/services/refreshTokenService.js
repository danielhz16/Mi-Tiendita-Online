import { sequelize } from "../../config/db.js";
import { createToken } from "../functions/createToken.js";

export const refreshTokenService = async (id_user) => {
    try {
        const [user] = await sequelize.query('EXEC GetUserById @id_user = :id_user', {
            replacements: { id_user },  
            type: sequelize.QueryTypes.SELECT,
        });
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        return createToken(user);  
    } catch (error) {
        throw new Error(error);
    }
};
1