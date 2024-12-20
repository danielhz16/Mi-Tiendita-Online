import { getConnections } from "../../config/database.js";
import sql from "mssql";

export const newProduct = async (req, res) => {
    const { category, name, brand, code, stock, status_product, price, description } = req.body;
    const photo = req.file ? req.file.buffer : null; 
    const pool = await getConnections();
    console.log(category);

    try {
        const result = await pool.request()
            .input('category', sql.Int, category)
            .input('user', sql.Int, req.user.id)
            .input('name', sql.VarChar, name)
            .input('brand', sql.VarChar, brand)
            .input('code', sql.VarChar, code)
            .input('stock', sql.Float, stock)
            .input('status_product', sql.Int, status_product)
            .input('price', sql.Decimal(10, 2), price)
            .input('photo', sql.VarBinary, photo || null) 
            .input('description', sql.VarChar, description)
            .execute('NewProduct');
        res.status(200).json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error while inserting new product' });
    }
};

export const updateProduct = async (req, res) => {
    const { product_id, name, description, stock, brand, price, code, category_id } = req.body;
    const photo = req.file ? req.file.buffer : null;
    const pool = await getConnections();

    try {
        const result = await pool.request()
            .input('product_id', sql.Int, product_id)
            .input('name', sql.VarChar, name)
            .input('description', sql.VarChar, description)
            .input('stock', sql.Float, stock)
            .input('brand', sql.VarChar, brand)
            .input('price', sql.Decimal(10, 2), price)
            .input('code', sql.VarChar, code)
            .input('category_id', sql.Int, category_id)
            .input('photo', sql.VarBinary, photo || null) 
            .execute('EditProduct');
        
        res.status(200).json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating the product' });
    }
};


export const deactivateProduct = async (req, res) => {
    const {id_product} = req.body;
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('id_product', sql.Int, id_product)
        .execute('DeactivateProduct');
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({error});
    }
};

export const activateProduct = async (req, res) => {
  const {id_product} = req.body;
  const pool = await getConnections();
  try {                                         
      const result = await pool.request() 
      .input('id_product', sql.Int, id_product)
      .execute('ActivateProduct');
      res.status(200).json({result});        
}   catch (error) {
        res.status(500).json({error});
    }           
};

export const addStock = async (req, res) => {
    const {product_id, stock} = req.body;
    const pool = await getConnections();
    try {
        const result = await pool.request()
        .input('product_id', sql.Int, product_id)
        .input('stock', sql.Float, stock)
        .execute('AddStock');
        res.status(200).json({result});
    } catch (error) {
        res.status(500).json({error});
    }
};

export const getAllProducts = async (req, res) => {
    const pool = await getConnections();
    try {
        const result = await pool.request().query('SELECT * FROM GetProducts');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

