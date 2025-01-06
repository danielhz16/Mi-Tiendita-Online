import { ImgurClient } from "imgur";
import dotenv from "dotenv";

dotenv.config();

export const client = new ImgurClient({
    clientId: process.env.IMGUR_CLIENT_ID,
    clientSecret: process.env.IMGUR_CLIENT_SECRET,
});
