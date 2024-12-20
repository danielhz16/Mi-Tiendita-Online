import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const newCategory = async (req, res) => {
  const { name, status_category } = req.body;
  const user_id= req.user.id;
  const pool = await getConnections();
  try {
    const result = await pool.request()
      .input("name", sql.VarChar, name)
      .input("status_category", sql.Int, status_category)
      .input("user", sql.Int, user_id) 
      .execute("NewCategory");

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const editCategory = async (req, res) => {
    const { category_id, name } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('category_id', sql.Int, category_id)
        .input('name', sql.VarChar, name)
        .execute('EditCategory');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const deactivateCategory = async (req, res) => {
    const { category_id } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('category_id', sql.Int, category_id)
        .execute('DeactivateCategory');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const activateCategory = async (req, res) => {
    const { category_id } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('category_id', sql.Int, category_id)
        .execute('ActivateCategory');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};
