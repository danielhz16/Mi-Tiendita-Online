import { createStatus } from "./models/newStatusModel.js";
import { editStatusModel } from "./models/editStatusModel.js";

//post
export const newStatus = async (req, res) => {
    const { name } = req.body;
    try {
        const response = await createStatus({ name });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//put
export const editStatus = async (req, res) => {
    const { id_status, name } = req.body;
    try {
        const response = await editStatusModel({ id_status, name });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};