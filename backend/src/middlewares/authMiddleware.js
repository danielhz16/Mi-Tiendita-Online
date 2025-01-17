import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(400).json('Token no encontrado o inválido');
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        if (req.user.status !== 1) {
         res.status(403).json('Cuenta suspendida');
         return;
        }
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json('Token expirado');
        }
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json('Token inválido');
        }
        return res.status(500).json('Error inesperado');
    }
};
