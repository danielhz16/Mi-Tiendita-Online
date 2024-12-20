import { getConnections } from "../../config/database.js";
import sql from "mssql";

//no uso maestro detalle, ya que el procedimiento 
// almacenado actualiza las tablas orders y orders_details
export const addProductToOrder = async (req, res) => {
    const user_id = req.user.id;
    const { product_id, quantity } = req.body;
    const pool = await getConnections();  
    try {
       const response = await pool.request()
       .input('user_id', sql.Int, user_id)
       .input('product_id', sql.Int, product_id)
       .input('quantity', sql.Int, quantity)
       .execute('AddProductToOrder');
       res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const deleteProductOrder= async (req, res) => {
    const id_user = req.user.id;
    const { product_id, quantity } = req.body;
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('id_user', sql.Int, id_user)
        .input('product_id', sql.Int, product_id)
        .input('quantity', sql.Int, quantity)
        .execute('DeleteProductOrder');
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error });
    }
};

//primero llenar datos en newCustomer y luego completar la orden, ruta ./customer.routes.js
export const completeOrder = async (req, res) => {
    const {delivery_date} = req.body;
    const id_user = req.user.id;
    const pool = await getConnections();
    try {
        const response = await pool.request()
        .input('id_user', sql.Int, id_user)
        .input('delivery_date', sql.Date, delivery_date)
        .execute('CompleteOrder');
        res.status(200).json({ response });
        console.log(response);
    } catch (error) {
        res.status(500).json({ error });
        console.log(error);
    }
};

