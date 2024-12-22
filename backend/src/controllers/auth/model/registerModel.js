import { getConnections } from '../../../config/database.js';
import bcrypt from 'bcrypt';
import sql from 'mssql';


export const createUser = async ({ full_name, birth_date, email, password, role }) => {
  const pool = await getConnections();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await pool.request()
      .input('full_name', sql.VarChar, full_name)
      .input('birth_date', sql.Date, birth_date)
      .input('email', sql.VarChar, email)
      .input('password', sql.VarChar, hashedPassword)
      .input('role', sql.Int, role)
      .execute('InsertUser');

    if (response && response.rowsAffected[0] > 0) {
      const result = await pool.request()
        .input('email', sql.VarChar, email) 
        .execute('GetUserForEmail');
      return result.recordset[0];
    }
    throw new Error('Error al registrar el usuario.');
  } catch (error) {
    throw new Error(error);
  }
};


