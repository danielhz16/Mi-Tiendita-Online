import { suspendUserModel } from "./models/suspendUserModel.js";
import { activateUserModel } from "./models/activateUserModel.js";
import { getUsersSuspendModel } from "./models/getUsersSuspendModel.js";
import { getUsersModel } from "./models/getUsersModel.js";
import { topUsersModel } from "./models/topUsersModel.js";
//patch
export const suspendUser = async (req, res) => {
    const { user_id } = req.params;
    console.log(user_id);
    try {
        const response = await suspendUserModel({ user_id });
        res.status(200).json('Usuario suspendido');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//patch
export const activateUser = async (req, res) => {
    const { user_id } = req.params;
    console.log(user_id);
    try {
        const response = await activateUserModel({ user_id });
        res.status(200).json('Usuario activado');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get
export const getUsersSuspend =  async(req, res) => {                           
 try {
    const response = await getUsersSuspendModel(); 
    res.status(200).json(response)                                                                                                                                                                                                                         
 } catch (error) {
    res.status(500).json(error.message)
 }
};

//get 
export const getUsers =  async(req, res) => {
    try {
        const response = await getUsersModel(); 
        res.status(200).json(response)                                                                                                                                                                                                                         
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//get
export const topUsers =  async(req, res) => {
    try {
        const response = await topUsersModel(); 
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}