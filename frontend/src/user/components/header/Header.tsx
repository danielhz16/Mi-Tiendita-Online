import React from "react";
import { Container } from "./styledComponents/Container";
import MenuIcon from "./components/MenuIcon";
import ThemeToggler from "../../../general/components/themeToggler/ThemeToggler";
import { HeaderProps } from "./interfaces/HeaderProps";
import logoDark from "../../../assets/logoDark.png";
import logoLight from "../../../assets/logoLight.png";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { useMenuContext } from "../../../context/menuContext/MenuContext";

import { Logo } from "./styledComponents/Logo";
import Menu from "../menu/Menu";

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => { 
  const { toggleMenu } = useMenuContext();
  const navigate = useNavigate();
  return (
  <Container>
    <Menu />
    <MenuIcon onClick={toggleMenu} />
    <Logo src={theme === "dark" ? logoDark : logoLight}
    onClick={() => navigate(routes.home)} />
    <Button 
    icon="pi pi-shopping-cart" 
    className="p-button-rounded button" 
    onClick={() => navigate(routes.cart)} />
    <ThemeToggler theme={theme} toggle={toggleTheme} />
  </Container>
);
};
export default Header;