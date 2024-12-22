import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const createProduct = async ({ category, name, brand, code, stock, status_product, price, description, photo }) => {
    try {
         const response = await pool.request()
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
        return response;
    } catch (error) {
        throw new Error(error);
    }
};