import { sequelize } from "../../config/db.js";
import { createToken } from "../functions/createToken.js";
import bcrypt from "bcrypt";

export const newUserService = async ({ full_name, birth_date, email, password, role }) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await sequelize.query(
            `EXEC InsertUser 
            @full_name = :full_name, 
            @birth_date = :birth_date, 
            @email = :email, 
            @password = :password, 
            @role = :role`,
            {
                replacements: {
                    full_name,
                    birth_date,
                    email,
                    password: hashedPassword,
                    role
                },
                type: sequelize.QueryTypes.SELECT, 
            }
        );

        if (!result) {
            throw new Error("No se pudo crear el usuario");
        }
        const token = createToken(result);
        return token;
    } catch (error) {
        throw new Error(`Error en newUserService: ${error.message}`);
    }
};
