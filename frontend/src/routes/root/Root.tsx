import { useAuth } from "../../context/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../../auth/token/decode/decodeToken";
import { routes } from "../routes";
import { routesOperator } from "../routes";
import { useEffect } from "react";


const Root = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    const role = token ? decodeToken(token).role : null;
    
    role === 1 ? navigate(routesOperator.ordersList) : navigate(routes.home);
  }, [token, navigate]);

  return (
		<></>
  );
};

export default Root;
