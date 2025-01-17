import { editUserService } from "../services/ediUserService.js";
import { getUserService } from "../services/getUserService.js";

//put
export const editUser = async (req, res) => {
    const { full_name, birth_date, email} = req.body;
    const id_user = req.user.id
    try {
      const response = await editUserService(full_name, birth_date, email, id_user);
      res.status(200).json('Infromación actualizada');
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


  //get 
  export const getUser = async (req, res) => {

    const id_user = req.user.id;
    try { 
      const response = await getUserService({id_user});
      res.status(200).json(response);
    } catch (error) {

      res.status(500).json(error.message);
    }
  };


  

