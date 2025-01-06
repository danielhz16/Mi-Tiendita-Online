import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createToken = (user) => {
    const token = jwt.sign(
        { id: user.id_users, role: user.role__id_role, status: user.status__id_status, email: user.email, name: user.full_name, birth_date: user.birth_date },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
      );
      return token;
};
