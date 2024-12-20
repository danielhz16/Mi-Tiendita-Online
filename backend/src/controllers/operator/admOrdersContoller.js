import { getConnections } from "../../config/database.js";
import sql from "mssql";

//no uso maestro detalle, ya que el procedimiento almacenado
//  actualiza las tablas orders y orders_details
export const addProductToOrderById = async (req, res) => {
    const { id_order, product_id, quantity } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .input("product_id", sql.Int, product_id)
            .input("quantity", sql.Int, quantity)
            .execute('AddProductToOrderById');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const deleteProductByOrderId  = async (req, res) => {
    const { id_order, product_id, quantity } = req.body;
    const pool = await getConnections();
    try {
        const result = await pool
            .request()
            .input("id_order", sql.Int, id_order)
            .input("product_id", sql.Int, product_id)
            .input("quantity", sql.Int, quantity)
            .execute('DeleteProductByOrderId');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error });
    }
};

