import { Outlet, Navigate } from "react-router-dom";
import { RouteProtectorProps } from "./interfaces/RouteProtectorProps";
import { useAuth } from "../../context/authContext/AuthContext";
import { decodeToken } from "../../auth/token/decode/decodeToken";
import { routes } from "../routes";
import { Container } from "./styledComponents/Container";

const RouteProtector = ({ role, redirect, component }: RouteProtectorProps) => {
  const { token } = useAuth();
  const tokenDecoded = token ? decodeToken(token) : null;
  if (!token) {
    return <Navigate to={routes.login} />;
  }
  if(tokenDecoded?.status === 1004) {
    console.log('suspendido');
    return <Navigate to={routes.suspend} />}
  if (tokenDecoded?.role === role) {
    return <Container className={role === 1 ? "operator" : "user"}>{component} <Outlet /></Container>
  }
  return <Navigate to={redirect} />;
};

export default RouteProtector;
