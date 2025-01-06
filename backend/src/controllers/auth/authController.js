import { createToken } from "../../functions/createToken.js";
import { getConnections } from "../../config/database.js";
import { createUser } from "./model/registerModel.js";
import { getUserByEmail, comparePassword } from "./model/loginModel.js";
import { createPassword } from "./model/passwordModel.js";
import { refreshTokenModel } from "./model/refreshTokenModel.js";

//rol 1 = operador, rol 2 = usuario
//post
export const register = async (req, res) => {
  const { full_name, birth_date, email, password, role } = req.body;
  try {
    const user = await createUser({ full_name, birth_date, email, password, role });
    const token = createToken(user);  
    res.status(200).json({token});   
  } catch (error) {
    res.status(400).json(error.message);  
  }
};

//post
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail({ email });
    if (!user) {
      return res.status(404).json('Usuario no encontrado');
    }
    const isMatch = await comparePassword(password, user.password);

    if (isMatch) {
      const token = createToken(user);  
      res.status(200).json({token});
      return;
    }
    res.status(401).json('Contraseña incorrecta');
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

//put
export const updatePassword = async (req, res) => {
  const { email, password, new_password } = req.body;
  try {
    createPassword({ email, password, new_password });
    res.status(200).json('Contraseña actualizada');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const refreshToken = async (req, res) => {
  const { id_user } = req.params;
  try {
    const response = await refreshTokenModel(id_user);
    const token = createToken(response);
    res.status(200).json({token});
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error);
  }
};