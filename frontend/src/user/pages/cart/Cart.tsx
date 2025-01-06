import { Page } from "../../../general/styledComponents/Page";
import { OrderList } from "primereact/orderlist";
import Template from "./components/Template";
import EmptyCart from "./anim/emptyCart/EmptyCart";
import { Style } from "./styledComponents/Styles";
import { useCartContext } from "../../../context/cartContext/CartContext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Flex } from "../../../general/styledComponents/Flex";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes"



const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { dataResult, clearCart } = useCartContext();
  const total = dataResult.reduce((acc, item) => acc + item.price * item.quantity, 0);
 
  return (
    <Page className="column flex-center">
      {dataResult.length === 0 ? (
        <section>
          <p>No hay productos en el carrito</p>
          <EmptyCart />
        </section>
      ) : (
        <>
          <Style className="card xl:flex xl:justify-content-center">
            <OrderList
              dataKey="id"
              value={dataResult}
              itemTemplate={Template}
              header="Productos"
            />
          </Style>
          <Flex>
            <Button label="confirmar orden" onClick={() => navigate(`${routes.customer}/true`)} icon="pi pi-check" />
            <Button label="Limpiar carrito" onClick={clearCart}  icon="pi pi-times" severity="danger" />
            <label htmlFor="minmax-buttons">Total(GTQ):</label>
            <InputNumber inputId="minmax-buttons" value={total} className="p-disabled" minFractionDigits={2} />
          </Flex>
        </>
      )}
    </Page>
  );
};

export default Cart;












