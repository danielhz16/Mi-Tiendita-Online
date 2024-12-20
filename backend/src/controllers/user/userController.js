import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const editUser = async (req, res) => {
    const pool = await getConnections();
    const { full_name, birth_date, email} = req.body;
    const id_user = req.user.id
  
    try {
      const result = await pool.request()
        .input('full_name', sql.VarChar, full_name)
        .input('birth_date', sql.Date, birth_date)
        .input('email', sql.VarChar, email)
        .input('id_user', sql.Int, id_user)
        .execute('EditUser');
  
      res.status(200).json({ message: "Usuario actualizado exitosamente", result });
    } catch (error) {
      res.status(500).json({ error });
    }
  };
  

