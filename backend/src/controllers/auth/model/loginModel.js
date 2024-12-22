import { getConnections } from "../../../config/database.js";
import bcrypt from "bcrypt";
import sql from "mssql";

export const getUserByEmail = async ({ email }) => {
  const pool = await getConnections();
  try {
    const result = await pool.request()
      .input('email', sql.VarChar, email)
      .execute('GetUserForEmail');
    
    return result.recordset[0];  
  } catch (error) {
    throw new Error('Error al obtener el usuario desde la base de datos');
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

