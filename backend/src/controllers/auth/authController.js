import { createToken } from "../../functions/createToken.js";
import bcrypt from "bcrypt";
import { getConnections } from "../../config/database.js";
import dotenv from "dotenv";
import sql from "mssql";

dotenv.config();

export const register = async (req, res) => {
  const pool = await getConnections();
  const { full_name, birth_date, email, password, role } = req.body;

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
      const user = result.recordset[0];
      const token = createToken(user);
      res.status(200).json({ token });
      return;
    } 
      throw new Error('Error al registrar el usuario.');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const login = async (req, res) => {
  const pool = await getConnections();
  const { email, password } = req.body;
 console.log(password);
  try {
    const result = await pool.request()
      .input('email', sql.VarChar, email)
      .execute('GetUserForEmail');

    const user = result.recordset[0];

    if (result.recordset.length === 0) {
      res.status(404).json({ message: 'Usuario no encontrado.' });
      return;
    }
      const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user);
      res.status(200).json({ token });
      return;
    }
      res.status(401).json({ message: 'Contraseña incorrecta.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const updatePassword = async (req, res) => {
  const pool = await getConnections();
  const { email, password, new_password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await pool.request()
      .input('email', sql.VarChar, email)
      .input('password', sql.VarChar, hashedPassword)
      .input('new_password', sql.VarChar, new_password)
      .execute('UpdatePassword');
    res.status(200).json({ message: 'Contraseña actualizada exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};