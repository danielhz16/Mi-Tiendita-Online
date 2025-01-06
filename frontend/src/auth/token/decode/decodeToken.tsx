import { jwtDecode } from "jwt-decode";
import { TokenInterface } from "./interface/TokenInterface";

export const decodeToken = (token: string): TokenInterface => {
    try {
     return jwtDecode(token);
    } catch (error) {
        throw new Error("Decoding error");
    }  
};