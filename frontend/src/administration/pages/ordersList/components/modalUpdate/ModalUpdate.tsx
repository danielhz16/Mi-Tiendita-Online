import { Modal } from "../../../../../general/styledComponents/Modal";
import { Overlay } from "../../../../../general/styledComponents/Overlay";
import { Button } from "primereact/button";
import { Flex } from "../../../../../general/styledComponents/Flex";
import { ModalProps } from "./interfaces/ModalProps";
import { Dropdown } from "primereact/dropdown";
import { status } from "./utils/status";
import { FloatLabel } from "primereact/floatlabel";
import { usePatch } from "../../../../../general/hooks/usePatch/usePatch";
import { useState } from "react";

export const ModalUpdate: React.FC<ModalProps> = ({toggle, id, name, funSuccess}) => {
    const { patch } = usePatch({ url: `${import.meta.env.VITE_URL_BACKEND}/updateOrderStatus/${id}`, headers: { "Content-Type": "application/json" } });
    const [newStatus, setNewStatus] = useState<number>(0);
    const success = () =>{
        funSuccess();
        toggle();
    }
    const submit = () => patch({new_status: newStatus}, success);
    return (
        <>
            <Overlay />
            <Modal>
                <h3>id: {id}</h3> 
                <h4>A Nombre: {name}</h4>
                <FloatLabel>
                <Dropdown
                 options={status}
                 optionLabel="name"
                 optionValue="value" 
                 placeholder="Selecciona un estado"
                 onChange={(e) => setNewStatus(e.value)}
                />
                <label>Nuevo Estado</label>
               </FloatLabel>
              
               <Flex>
                <Button label="Actualizar" icon="pi pi-refresh" onClick={submit} />
                <Button label="Cerrar" onClick={toggle} icon="pi pi-times" severity="danger" />
               </Flex>
            </Modal>
        </>
    );
};