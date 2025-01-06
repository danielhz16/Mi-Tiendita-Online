import { OrderInteface } from "./interfaces/OrderInterface";
import useAxios from "../../../general/hooks/useAxios/useAxios";
import { OrderCard } from "./components/orderCard/OrderCard";
import { Page } from "../../../general/styledComponents/Page";
import { Empty } from "./anim/empty/Empty";


const OrdersList: React.FC = () => {
  const statusIds = encodeURIComponent("3,4,6,7");
  const { data, loading, error, reloadData } = useAxios<OrderInteface[]>(
    `${import.meta.env.VITE_URL_BACKEND}/filterOrders/${statusIds}`
  );
  
 
 if (loading) return <Page><h1>Loading...</h1></Page>;
 if (error) return <Page><h1>Error: {error}</h1></Page>;
 if (data?.length === 0) return <Page><Empty />Sin ordenes pendientes</Page>;
 console.log(data);
 return (
 <Page>

   {Array.isArray(data) && data.map((order) => (
     <OrderCard key={order.id_order} order={order} 
     fun={reloadData}/>
   ))}
 </Page>
 )
};

export default OrdersList;