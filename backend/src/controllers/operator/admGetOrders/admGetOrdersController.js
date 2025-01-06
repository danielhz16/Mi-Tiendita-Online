import { getOrdersModel } from "./models/getOrdersModel.js";
import { filterOrdersModel } from "./models/filterOrdersModel.js";

//get
export const getOrders = async (req, res) => {
    try {
        const result = await getOrdersModel();
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
        const result = await  filterOrdersModel({ status_id });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error)

    }
};