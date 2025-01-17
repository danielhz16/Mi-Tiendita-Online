import { newUserService } from "../services/newUserService.js";
import { loginService } from "../services/loginService.js";
import { refreshTokenService } from "../services/refreshTokenService.js";

//post
export const register = async (req, res) => {
    const { full_name, birth_date, email, password, role } = req.body;
    try {
        const token = await newUserService({ full_name, birth_date, email, password, role });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//post
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await loginService({ email, password });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const refreshToken = async (req, res) => {
    if (!req.user) {
        return res.status(400).json("Usuario no autenticado o token inválido");
    }
    const { id } = req.user;
    try {
        const token = await refreshTokenService(id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json(error.message);
    }
};
