import React from "react";
import { Error } from "../../general/anim/error/Error";
import { Container } from "./styledComponents/Container";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { Button } from "primereact/button";
import { Flex } from "../../general/styledComponents/Flex";
import { useAuth } from "../../context/authContext/AuthContext";
import { useEffect } from "react";


const Suspend: React.FC = () => {
  const { refreshToken } = useAuth();
  useEffect(()  => { refreshToken() }, []);

  const navigate = useNavigate();
  return (
    <Container>
        <Error />
      <h1>Cuenta Suspendida</h1>
      <Flex>
        <Button label="Reintentar" onClick={() => navigate(routes.home)} severity="success" icon="pi pi-refresh" />
        <Button label='Ir a Login' onClick={() => navigate(routes.login)} severity="danger" icon="pi pi-sign-out" />
      </Flex>
    </Container>
  );
};

export default Suspend;
