import { suspendUserService } from "../services/suspendUserService.js";
import { activateUserService } from "../services/activateUserService.js";
import { getUsersSuspendService } from "../services/getUsersSuspendServices.js";
import { getUsersService } from "../services/getUsersService.js";
import { topUsersService } from "../services/topUsersService.js";

//patch
export const suspendUser = async (req, res) => {
    const { user_id } = req.params;
    console.log(user_id);
    try {
        const response = await suspendUserService({ user_id });
        res.status(200).json('Usuario suspendido');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//patch
export const activateUser = async (req, res) => {
    const { user_id } = req.params;
    try {
        const response = await activateUserService({ user_id });
        res.status(200).json('Usuario activado');
    } catch (error) {
        res.status(500).json(error.message);
    }
};

//get
export const getUsersSuspend =  async(req, res) => {                           
 try {
    const response = await getUsersSuspendService(); 
    res.status(200).json(response)                                                                                                                                                                                                                         
 } catch (error) {
    res.status(500).json(error.message)
 }
};

//get 
export const getUsers =  async(req, res) => {
    try {
        const response = await getUsersService(); 
        res.status(200).json(response)                                                                                                                                                                                                                         
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//get
export const topUsers =  async(req, res) => {
    try {
        const response = await topUsersService(); 
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}