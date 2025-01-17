import { getCustomersWithMoreOrdersService } from "../services/customersWhitMoreOrdersService.js";
import { getCustomersService } from "../services/getCustomersService.js";
import { getCustomerService } from "../services/getCustomerService.js";
import { updateCustomerService } from "../services/updateCustomerService.js";
//get
export const customersWithMoreOrder = async (req, res) => {
  try {
    const result = await getCustomersWithMoreOrdersService();
    res.status(200).json(result); 
  } catch (error) {
    res.status(500).json(error.message);  
  }
};

//get
export const getCustomers = async (req, res) => {
  try {
    const result = await getCustomersService();
    res.status(200).json(result); 
  } catch (error) {
    res.status(500).json(error.message);  
  }
};

//get  
export const getCustomerById = async (req, res) => {
  const{customer_id} = req.params;
  try {
    const response = await getCustomerService({ customer_id });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

//put
export const updateCustomerById = async (req, res) => {
  const {legal_name, trade_name, delivery_address, phone, email} = req.body;
  const {id_customer} = req.params;
  try {
    const response = await updateCustomerService({ legal_name, trade_name, delivery_address, phone, email, id_customer });
    res.status(200).json('Datos actualizados');
  } catch (error) {
    res.status(500).json(error.message);
  }
};    