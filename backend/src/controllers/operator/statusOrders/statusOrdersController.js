import { approveOrderModel } from "./models/approveOrderModel.js";
import { cancelOrderModel } from "./models/cancelOrderModel.js";
import { updateOrderStatusModel } from "./models/updateOrderStatusModel.js";

//post
export const approveOrder = async (req, res) => {
    const { id_order } = req.body;
    try {
        const response = await approveOrderModel({ id_order });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//post
export const cancelOrder = async (req, res) => {
    const { id_order } = req.body;
    try {
        const response = await cancelOrderModel({ id_order });  
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//put
//estados 3: pendiente, 4: aprobado, 5: cancelado 6: en progros 7: enviado 8: entregado
export const updateOrderStatus = async (req, res) => {
    const { id_order, new_status } = req.body;
    try {
        const response = await  updateOrderStatusModel({ id_order, new_status });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


