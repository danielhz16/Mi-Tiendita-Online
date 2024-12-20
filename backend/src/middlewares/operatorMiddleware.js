import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const operatorMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({ error: "Token not found or malformed" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    if (req.user.role !== 1 || req.user.status !== 1) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
