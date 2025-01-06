import { getConnections } from "../../../../config/database.js";
import sql from "mssql";
import { processPhoto } from "../../../../functions/processPhoto.js";


export const createProduct = async ({
    category, user, name, brand, code, stock, status_product, price, description, photo
}) => {
    let photoUrl = await processPhoto(photo);

    const pool = await getConnections();
    try {
        const result = await pool.request()
            .input('category', sql.Int, category)
            .input('user', user)
            .input('name', sql.VarChar, name)
            .input('brand', sql.VarChar, brand)
            .input('code', sql.VarChar, code)
            .input('stock', sql.Float, stock)
            .input('status_product', sql.Int, status_product)
            .input('price', sql.Decimal(10, 2), price)
            .input('photo', sql.VarChar, photoUrl || null)
            .input('description', sql.VarChar, description)
            .execute('NewProduct');
        return result;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};