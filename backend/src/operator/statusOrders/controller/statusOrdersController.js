import { updateOrderStatusService } from '../services/updateOrderStatusService.js';
import {approveOrderService} from '../services/approveOrderService.js'
//patch
export const approveOrder = async (req, res) => {
    const { id_order } = req.body;
    try {
        const response = await approveOrderService({ id_order });
        res.status(200).json('Orden aprobada');
    } catch (error) {
        res.status(500).json(error.message);
    }
};


//patch
//estados 3: pendiente, 4: aprobado, 5: cancelado 6: en progros 7: enviado 8: entregado
export const updateOrderStatus = async (req, res) => {
    const { new_status } = req.body;
    const { id_order } = req.params;
    try {
        const response = await  updateOrderStatusService({ id_order, new_status });
        res.status(200).json('Estado actualizado');
    } catch (error) {
        res.status(500).json(error.message);
    }
};


