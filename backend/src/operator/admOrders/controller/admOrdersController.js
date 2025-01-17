import { getOrdersService } from "../services/getOrdersService.js";
import { filterOrdersService } from "../services/filterOrderService.js";

//get
export const getOrders = async (req, res) => {
    try {
        const result = await getOrdersService();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error)
    }
};

//get/id_status
export const filterOrders = async (req, res) => {
    const { status_id } = req.params;
    try {
        const result = await  filterOrdersService({ status_id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
};