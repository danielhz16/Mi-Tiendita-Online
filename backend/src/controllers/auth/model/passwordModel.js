import { getConnections } from "../../../config/database.js";
import sql from "mssql";
import bcrypt from "bcrypt";
import { getUserByEmail } from "./loginModel.js";

export const createPassword = async ({ email,password, new_password }) => {
    const pool = await getConnections();
    try {
       const user = await getUserByEmail(email);
         if (!user) {
              throw new Error('Usuario no encontrado.');
              return;
         }
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch) {
                const hashedPassword = await bcrypt.hash(new_password, 10);
                const response = await pool.request()
                    .input('email', sql.VarChar, email)
                    .input('password', sql.VarChar, hashedPassword)
                    .execute('UpdatePassword');
                if (response && response.rowsAffected[0] > 0) {
                    throw new Error('Error al actualizar la contraseña.')
                }
                return response;
            }
    } catch (error) {
        throw new Error(error);
    }
};