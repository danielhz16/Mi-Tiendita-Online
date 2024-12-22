import { addProductModel } from "./models/addProductModel.js";
import { deleteProductModel } from "./models/deleteProductModel.js";

//no uso maestro detalle, ya que el procedimiento almacenado
//  actualiza las tablas orders y orders_details

//post
export const addProductToOrderById = async (req, res) => {
    const { id_order, product_id, quantity } = req.body;
    try {
        const response = await addProductModel({ id_order, product_id, quantity });
        res.status(200).json({ response: "se agrego con exito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//post
export const deleteProductByOrderId  = async (req, res) => {
    const { id_order, product_id, quantity } = req.body;
    const pool = await getConnections();
    try {
        const response = await deleteProductModel({ id_order, product_id, quantity });
        res.status(200).json({ response: "se elimino con exito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

