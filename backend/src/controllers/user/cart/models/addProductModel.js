import { getConnections } from '../../../../config/database.js'
import sql from 'mssql'

export const addProductToCartModel = async ({ id_user, product_id,  quantity}) => {
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('user_id', sql.Int, id_user)
        .input('product_id', sql.Int, product_id)
        .input('quantity', sql.Int, quantity)
        .execute('AddProductToCart');
        return response;
    } catch (error) {
        throw new Error(error)
    }
};