import { getConnections } from "../../../../config/database.js";
import sql from "mssql";
import { processPhoto } from "../../../../functions/processPhoto.js";

export const updateProductModel = async ({ product_id, name, description, stock, brand, price, code, id_category_products, photo }) => {
  const pool = await getConnections();

  let photoUrl = await processPhoto(photo);
  console.log(photoUrl);
  try {
    const response = await pool.request()
      .input('product_id', sql.Int, product_id)
      .input('name', sql.VarChar, name)
      .input('description', sql.VarChar, description)
      .input('stock', sql.Float, stock)
      .input('brand', sql.VarChar, brand)
      .input('price', sql.Decimal(10, 2), price)
      .input('code', sql.VarChar, code)
      .input('id_category_products', sql.Int, id_category_products)
      .input('photo', sql.VarChar, photoUrl || null) 
      .execute('EditProduct');

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
