import { sequelize } from "../../config/db.js";
import { createToken } from "../functions/createToken.js";
import bcrypt from "bcrypt";

export const loginService = async ({ email, password }) => {
    try {
        const [user] = await sequelize.query('EXEC LoginUser @email = :email', {
            replacements: { email },
            type: sequelize.QueryTypes.SELECT,
        });

        if (!user) {
            throw new Error("Credenciales incorrectas");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = createToken(user);
            return token;
        }

        throw new Error("Credenciales incorrectas");
    } catch (error) {
        throw new Error(`Error en loginService: ${error.message}`);
    }
};
