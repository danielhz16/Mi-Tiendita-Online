import { createCustomer } from "./models/newCustomerModel.js";
import { updateCustomerModel } from "./models/updateCustomerModel.js";
import { getCustomerModel } from "./models/getCustomerModel.js";

//get
export const getCustomer = async (req, res) => {
    const id_user = req.user.id;
    try {
        const response = await getCustomerModel({ id_user });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
    }
}


//post
export const newCustomers = async (req, res) => {
    const {legal_name, trade_name, delivery_address, phone, email} = req.body;
    const id_user = req.user.id;
    try {
        const response = await createCustomer({ legal_name, trade_name, delivery_address, phone, email, id_user });
        res.status(200).json('Datos guardados');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//put
export const updateCustomer = async (req, res) => {
    const {legal_name, trade_name, delivery_address, phone, email} = req.body;
    const id_user = req.user.id;
    try {
        const response = await updateCustomerModel({ legal_name, trade_name, delivery_address, phone, email, id_user });
        res.status(200).json('Datos actualizados');
    } catch (error) {
        res.status(500).json(error.message);
    }
};