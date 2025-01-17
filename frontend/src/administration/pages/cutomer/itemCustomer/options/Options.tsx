import { Menu } from "primereact/menu"
import { useNavigate } from "react-router-dom";
import { routesOperator } from "../../../../../routes/routes";
interface OptionsProps {
    id: number
}

const Options: React.FC<OptionsProps> = ({id}) => {
    const navigate = useNavigate();
    const menuItems = [
        {
            label: 'Editar',
            icon: 'pi pi-pencil',
            command: () => navigate(`${routesOperator.editCustomer}/${id}`)
        },
    ];
    return (
        <Menu model={menuItems} />
    )
}

export default Options