import { getCustomersWithMoreOrders } from "./models/customersModel.js"; 

//get
export const customersWithMoreOrder = async (req, res) => {
  try {
    const result = await getCustomersWithMoreOrders();
    res.status(200).json(result); 
  } catch (error) {
    res.status(500).json(error.message);  
  }
};
