import { Menu } from "primereact/menu";
import { useNavigate } from "react-router-dom";
import { routesOperator } from "../../../../../../../routes/routes";
import { usePatch } from "../../../../../../../general/hooks/usePatch/usePatch";
import { OptionsProps } from "../../../../../../interfaces/OptionsProps";
import AddStockModal from "../addStockModal/AddStockModal";
import { useState } from "react";

const Options: React.FC<OptionsProps> = ({id, funSuccess, name, status, code}) => {
  const [  modalStock, setModalStock ] = useState(false);
  const url = status === "Activo" ? 'deactivateProduct' : 'activateProduct';
  const { patch } = usePatch({ url: `${import.meta.env.VITE_URL_BACKEND}/${url}/${id}` });
  const toggleModalStock = () => setModalStock(!modalStock);	
  
  const navigate = useNavigate();
  const statusChange = status === "Activo" ? 'Desactivar' : 'Activar';
  const menuItems = [
    {
        label: name,
        items: [
            {
                label: 'Editar',
                icon: 'pi pi-pencil',
                command: () =>  navigate(`${routesOperator.updateProduct}/${id}`)
            },
            {
                label: statusChange,
                icon: 'pi pi-times',
                command: () => patch({}, funSuccess)
            },
            {
                label: 'Agregar stock',
                icon: 'pi pi-plus',
                command: () => toggleModalStock()
            }
        ]
    }
];
 if (modalStock) {
  return <AddStockModal toggle={toggleModalStock} name={name} code={code}/>;
 }
  return <Menu model={menuItems} style={{position: 'absolute'}}/>
};
export default Options;