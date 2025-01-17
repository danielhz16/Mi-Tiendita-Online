import { addProductService } from "../services/addProductService.js";
import { deleteProductService } from "../services/deleteProductService.js";
import { completeOrderService } from "../services/completeOrderService.js";
import { getDataInvoiceModel } from "../services/getDataInvoice.js";
import { getOrderDetailsService } from "../services/getOrderDetailsService.js";
import { getOrdersByUserService } from "../services/getOrdersByUserService.js";
import { cancelOrderService } from "../services/cancelOrderService.js";


//get
export const getDataInvoice= async (req, res) => {
    const id_order = req.params.id_order;
    try {
        const response = await getDataInvoiceModel({ id_order });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

//get 
export const getOrderDetails = async (req, res) => {
    const id_order = req.params.id_order;
    const id_user = req.user.id;
    try {
        const response = await getOrderDetailsService({ id_order, id_user });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get
export const getOrdersByUser = async (req, res) => {
    const id_user = req.user.id;
    try {
        const response = await getOrdersByUserService({ id_user });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//post
export const addProductToOrder = async (req, res) => {
    const user_id = req.user.id;
    const { product_id, quantity } = req.body;  
    try {
       const response = await addProductService({ user_id, product_id, quantity });
       res.status(200).json('Producto agregado a la orden');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//post
export const deleteProductOrder= async (req, res) => {
    const id_user = req.user.id;
    const { product_id, quantity } = req.body;
    try {
        const response = await deleteProductService({ product_id, quantity, id_user })
        res.status(200).json('Producto eliminado de la orden');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//post 
export const completeOrder = async (req, res) => {
    const {delivery_date} = req.body;
    const id_user = req.user.id;
    try {
        const response = await completeOrderService({ id_user, delivery_date });
        res.status(200).json('orden completada');
    } catch (error) {
        res.status(500).json(error.message);
    }
};


//patch
export const cancelOrder = async (req, res) => {
    const { id_order } = req.params;
    try {
        const response = await cancelOrderService({ id_order });  
        res.status(200).json('Orden cancelada');
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};
