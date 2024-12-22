import { createCustomer } from "./models/newCustomerModel.js";
import { updateCustomerModel } from "./models/updateCustomerModel.js";

//post
export const newCustomers = async (req, res) => {
    const {legal_name, trade_name, delivery_address, phone, email} = req.body;
    const id_user = req.user.id;
    try {
        const response = await createCustomer({ legal_name, trade_name, delivery_address, phone, email, id_user });
        res.status(200).json({response});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

//put
export const updateCustomer = async (req, res) => {
    const {legal_name, trade_name, delivery_address, phone, email} = req.body;
    const id_user = req.user.id;
    try {
        const response = await updateCustomerModel({ legal_name, trade_name, delivery_address, phone, email, id_user });
        res.status(200).json({response});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};