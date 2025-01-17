import { processPhoto } from "../functions/processPhoto.js";
import { sequelize } from "../../../config/db.js";

export const createProduct = async ({
    category, user, name, brand, code, stock, status_product, price, description, photo
}) => {
    let photoUrl = await processPhoto(photo);
    try {
     const [product] = await sequelize.query(`
        EXEC NewProduct @category = :category, @user = :user, @name = :name, @brand = :brand, @code = :code, @stock = :stock,
        @status_product = :status_product, @price = :price, @description = :description, @photo = :photo
        `, {
            replacements: {
                category,
                user,
                name,
                brand,
                code,
                stock,
                status_product,
                price,
                description,
                photo: photoUrl
            },
            type: sequelize.QueryTypes.SELECT 
        })
        return product;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
};