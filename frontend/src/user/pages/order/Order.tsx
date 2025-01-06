import { CreateDeliveryDate } from "./functions/CreateDeliveryDate";
import { Modal } from "../../../general/styledComponents/Modal";
import { useState } from "react";
import { Page } from "../../../general/styledComponents/Page";
import { Error } from "../../../general/anim/error/Error";
import { usePost } from "../../../general/hooks/usePost/usePost";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { Delivery } from "../customer/anim/delivery/Delivery";
import { Flex } from "../../../general/styledComponents/Flex";
import { routes } from "../../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext/CartContext";


const Order: React.FC = () => {
	const { clearCart } = useCartContext();
	const navigate = useNavigate();
	const [modal, setModal] = useState<boolean>(true);
	const [sussecc, setSussecc] = useState<boolean>();
	const { post } = usePost({ url: `${import.meta.env.VITE_URL_BACKEND}/completeOrder`, headers: { "Content-Type": "application/json" }, hiddenNotify: true });
	const delivery_date = CreateDeliveryDate();
	const toggleModal = () => setModal(!modal);
	const success = () =>{
		clearCart();
		setSussecc(true);
	} 
	useEffect(() => {post({ delivery_date }, success)}, []);
	return (
		<>
		{sussecc ? (
			<Page>
			 {modal && (
				<Modal>
					<h1>Gracias por tu compra</h1>
					<p>Tu pedido llegará en 3 días hábiles</p>
				   <Button label="Cerrar" onClick={toggleModal} />
			   </Modal>
			   )}
   
	        <div>
			<strong>Fecha de entrega:</strong> {delivery_date}
			</div>
			<Delivery />
			<Flex>
			<Button
			label="Volver a la tienda" icon="pi pi-arrow-left" onClick={() => navigate(routes.home)} />
			<Button label="Ir a pedidos" icon="pi pi-box" onClick={() => navigate(routes.orders)} />
			</Flex>
		   </Page>
	   ) : (
	        <Page>
			  <Error />
			  <Button label="Volver a la tienda" icon="pi pi-arrow-left" onClick={() => navigate(routes.home)} />
			</Page>
		)}
     </>
	);
};

export default Order;