import { useMenuContext } from "../../../context/menuContext/MenuContext";
import { Container } from "./styledComponents/Container";
import { Overlay } from "../../../general/styledComponents/Overlay";
import ItemMenu from "./components/itemMenu/ItemMenu";
import { itemsMenu } from "./utils/itemsMenu";
import { Button } from "primereact/button";
import { useAuth } from "../../../context/authContext/AuthContext";
const Menu: React.FC = () => {
  const { logout } = useAuth();
  const {  menuOpen, toggleMenu } = useMenuContext();
  return (
    <>
    {menuOpen && <Overlay />}
    <Container className={menuOpen ? 'open' : 'close'}>
    <Button icon="pi pi-times" rounded  severity="danger" aria-label="Cancel" className="close" onClick={toggleMenu}/>
    {itemsMenu.map((item) => (
        <ItemMenu key={item.name} item={item} onClick={toggleMenu} />
    ))}
    <Button label="Cerrar sesión" onClick={logout}  icon="pi pi-sign-out" 
    severity="danger" className="mt-8"/>
    </Container>
    </>
  )
};

export default Menu;