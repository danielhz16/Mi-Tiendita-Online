import { addProductModel } from "./models/addProductModel.js";
import { deleteProductModel } from "./models/deleteProductModel.js";
import { completeOrderModel } from "./models/completeOrderModel.js";
//no uso maestro detalle, ya que el procedimiento 
// almacenado actualiza las tablas orders y orders_details

//post
export const addProductToOrder = async (req, res) => {
    const user_id = req.user.id;
    const { product_id, quantity } = req.body;  
    try {
       const response = await addProductModel({ user_id, product_id, quantity });
       res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//post
export const deleteProductOrder= async (req, res) => {
    const id_user = req.user.id;
    const { product_id, quantity } = req.body;
    try {
        const response = await deleteProductModel({ product_id, quantity, id_user })
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//post 
//primero llenar datos en newCustomer y luego completar la orden, ruta ./customer.routes.js
export const completeOrder = async (req, res) => {
    const {delivery_date} = req.body;
    const id_user = req.user.id;
    try {
        const response = await completeOrderModel({ id_user, delivery_date });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

