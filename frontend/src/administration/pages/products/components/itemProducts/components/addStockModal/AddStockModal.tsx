import { Modal } from "../../../../../../../general/styledComponents/Modal";
import { Overlay } from "../../../../../../../general/styledComponents/Overlay";
import { Button } from "primereact/button";
import { Flex } from "../../../../../../../general/styledComponents/Flex";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { useProductsContext } from "../../../../../../../context/productsCotext/ProductsContext";


interface AddStockModalProps {
    toggle: () => void;
    code: string;
    name: string;
}
const AddStockModal: React.FC<AddStockModalProps> = ({toggle, code, name}) => {
    const { addStockByCode } = useProductsContext();
    const [stock, setStock] = useState<number>(0);
    const onSubmit = () => {
        addStockByCode(code, stock);
        toggle();
    };
 return (
    <>
    <Overlay />
    <Modal>
        <h2>Agregar stock a {name}</h2>
        <h3>Ingrese la cantidad de stock</h3>
        <InputNumber  min={0} onChange={(e) => setStock(e.value ?? 0)} />
        <Flex>
             <Button label="Agregar" icon="pi pi-plus"  
             onClick={onSubmit}/>
            <Button label="Cancelar" onClick={toggle} icon="pi pi-times" severity="danger"/>
        </Flex>
    </Modal>
    </>
 )
};
export default AddStockModal;