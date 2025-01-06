import { Menu } from "primereact/menu";
import { OptionsProps } from "../../../../../interfaces/OptionsProps";
import { usePatch } from "../../../../../../general/hooks/usePatch/usePatch";

const Options: React.FC<OptionsProps> = ({ name, status, id, funSuccess, command }) => {
  const url = status === "Activo" ? 'deactivateCategory' : 'activateCategory';
  const { patch } = usePatch({ url: `${import.meta.env.VITE_URL_BACKEND}/${url}/${id}` });
  const statusChange = status === "Activo" ? 'Desactivar' : 'Activar';

  const menuItems = [
    {
      label: name,
      items: [
        {
          label: 'Editar',
          command: command,
          icon: 'pi pi-pencil'
        },
        {
          label: statusChange,
          command: () => patch({}, funSuccess),
          icon: 'pi pi-times'
        },
      ]
    }
  ];

  return <Menu model={menuItems} style={{ position: 'absolute' }} />;
};

export default Options;
