import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const updateProductModel = async ({ product_id, name, description, stock, brand, price, code, category_id, photo }) => {
 const pool = await getConnections();
 try {
    const response = await pool.request()
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
        return response;
 } catch (error) {
    throw new Error(error);
 }
}