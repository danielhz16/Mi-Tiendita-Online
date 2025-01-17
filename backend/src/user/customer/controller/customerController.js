import { createCustomer } from "../services/newCustomerService.js";
import { updateCustomerService } from "../services/updateCustomerService.js";
import { getCustomerService } from "../services/getCustomerService.js";

//get
export const getCustomer = async (req, res) => {
    const id_user = req.user.id;
    try {
        const response = await getCustomerService({ id_user });
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
        const response = await updateCustomerService({ legal_name, trade_name, delivery_address, phone, email, id_user });
        res.status(200).json('Datos actualizados');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

