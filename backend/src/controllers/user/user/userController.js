import { editUserModel } from "./models/ediUserModel.js";

//put
export const editUser = async (req, res) => {
    const { full_name, birth_date, email} = req.body;
    const id_user = req.user.id
  
    try {
      const response = await editUserModel(full_name, birth_date, email, id_user);
      res.status(200).json({ message: "Usuario actualizado exitosamente", response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

