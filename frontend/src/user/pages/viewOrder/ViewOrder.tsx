import { useParams } from 'react-router-dom';
import useAxios from '../../../general/hooks/useAxios/useAxios';
import { useNavigate } from 'react-router-dom';
import { fixedStatusOrder } from './utils/fixedStatusOrder';
import { Cat } from './anim/cat/Cat';
import { Flex } from '../../../general/styledComponents/Flex';
import { Timeline } from 'primereact/timeline';
import { OrderViewInterface } from './interface/OrderViewInterface';
import { Page } from '../../../general/styledComponents/Page';
import { TimelineContainer } from './styledComponents/TimelineContainer';
import { Button } from 'primereact/button';
import { routes } from '../../../routes/routes';
import { usePatch } from '../../../general/hooks/usePatch/usePatch';




const ViewOrder: React.FC = () => {
  const navigate = useNavigate();
  const { id_order } = useParams();
  const { data, loading, error } = useAxios<OrderViewInterface>(
    `${import.meta.env.VITE_URL_BACKEND}/getOrderDetails/${id_order}`
  );
  const { patch } = usePatch({ url: `${import.meta.env.VITE_URL_BACKEND}/cancelOrder/${id_order}` });
  const currentStatus = data?.name_status || 'En carrito';
  const events = fixedStatusOrder
    .filter((status) => fixedStatusOrder.indexOf(status) <= fixedStatusOrder.indexOf(currentStatus))
    .map((status) => ({ status }));

  if (loading) return <Page><span>Loading...</span></Page>;
  if (error) return <Page><span>Error loading order details.</span></Page>;
 

  return (
    <Page>
      <Flex>
        <Cat />
        <TimelineContainer>
          <Timeline
            value={events}
            align='left'
            content={(item) => <p>{item.status}</p>}
          />
        </TimelineContainer>
      </Flex>
      <div>
      <Flex>
      <Button label='volver' onClick={() => navigate(routes.orders)}
      severity='secondary' />
      <Button label='volver a la tienda' onClick={() => navigate(routes.home)}
      severity='success' />
       {data?.name_status !== 'Cancelada' && (
       <Button label="Comprobante de pago" icon="pi pi-print" severity="success" 
       onClick={() => navigate(`${routes.Invoice}/${id_order}`)}
       />
        )}
      </Flex>
      </div>
      {data && data.name_status === 'Pendiente' && <Button label='cancelar' onClick={patch} severity='danger' />}
    </Page>
  );
};

export default ViewOrder;
