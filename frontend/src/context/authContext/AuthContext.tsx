import { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType } from "./interfaces/AuthContextType";
import axios from "axios";
import { getToken } from "../../general/functions/getToken";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken || null;
  });

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const refreshToken = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_URL_BACKEND}/refreshToken`,
        {},
        { headers: { Authorization: getToken() } } 
      );
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      console.log(res.data.token);
    } catch (err) {
      console.error("Error al refrescar el token:", err);
    }
  };
  

 useEffect(() => { refreshToken() }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro de un AuthProvider");
  }
  return context;
};