import { processPhoto } from "../functions/processPhoto.js";
import { sequelize } from "../../../config/db.js";

export const updateProductService = async ({ product_id, name, description, stock, brand, price, code, id_category_products, photo }) => {
  let photoUrl = await processPhoto(photo);
  try {
    const [product] = await sequelize.query(`
      EXEC EditProduct @product_id = :product_id, @name = :name, @description = :description, @stock = :stock,
      @brand = :brand, @price = :price, @code = :code, @id_category_products = :id_category_products, @photo = :photo
      `,
    {
      replacements: {
        product_id,
        name,
        description,
        stock,
        brand,
        price,
        code,
        id_category_products,
        photo: photoUrl
      },
      type: sequelize.QueryTypes.SELECT
    })
    return product;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};
