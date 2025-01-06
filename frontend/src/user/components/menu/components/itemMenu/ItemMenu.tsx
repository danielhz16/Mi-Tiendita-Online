import { Li } from "./styledComponents/Li"; 
import { Link } from "react-router-dom";
import { ItemMenuProps } from "./interfaces/ItemMenuProps";

const ItemMenu: React.FC<{item: ItemMenuProps, onClick: () => void}> = ({ item, onClick }) => {
    return (
        <Li>
            <Link to={item.link} onClick={onClick}>
                <i className={item.icon} />
                <span>{item.name}</span>
            </Link>
        </Li>
    )
};
 

export default ItemMenu;

