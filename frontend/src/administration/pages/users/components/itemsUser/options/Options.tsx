import { Menu } from 'primereact/menu';
import { OptionsProps } from './interfaces/OptionsProps';
import { usePatch } from '../../../../../../general/hooks/usePatch/usePatch';



const Options: React.FC<OptionsProps> = ({name, status, id, success}) => {
    const url = status === 'Activo' ? 'suspendUser' : 'activateUser';
    const { patch } = usePatch({ url: `${import.meta.env.VITE_URL_BACKEND}/${url}/${id}` });
    const statusChange = status === 'Activo' ? 'Desactivar' : 'Activar';
;
    const model = [
     { 
        label: name,
        items: [
            {
                label: statusChange,
                command: () => patch({}, success),
                icon: statusChange === 'Desactivar' ? 'pi pi-times' : 'pi pi-check',
            }
        ]
     }
    ]
    return <Menu model={model} />
}

export default Options;