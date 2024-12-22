import { suspendUserModel } from "./models/suspendUserModel.js";
import { activateUserModel } from "./models/activateUserModel.js";
import { getUsersSuspendModel } from "./models/getUsersSuspendModel.js";

//patch
export const suspendUser = async (req, res) => {
    const { user_id } = req.body;
    try {
        const response = await suspendUserModel({ user_id });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//patch
export const activateUser = async (req, res) => {
    const { user_id } = req.body;
    try {
        const response = await activateUserModel({ user_id });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get
export const getUsersSuspend =  async(req, res) => {                           
 try {
    const response = await getUsersSuspendModel(); 
    res.status(200).json({response})                                                                                                                                                                                                                         
 } catch (error) {
    res.status(500).json({error: error.message})
 }
};

