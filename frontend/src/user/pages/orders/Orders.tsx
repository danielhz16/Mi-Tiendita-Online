import { Page } from "../../../general/styledComponents/Page";
import OrderItem from "./components/orderItem/OrderItem";
import useAxios from "../../../general/hooks/useAxios/useAxios";


const Orders: React.FC = () => {
  const { data } = useAxios<[]>(`${import.meta.env.VITE_URL_BACKEND}/getOrdersByUser`);
  return (
    <Page>
      {data && data.map((order: any) => (<OrderItem key={order.id_order} order={order} />))}
    </Page>
  )
};

export default Orders;