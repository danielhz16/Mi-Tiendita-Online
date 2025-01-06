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
import { Canceled } from './anim/canceled/Canceled';

const ViewOrder: React.FC = () => {
  const navigate = useNavigate();
  const { id_order } = useParams();
  const { data, loading, error } = useAxios<OrderViewInterface[]>(
    `${import.meta.env.VITE_URL_BACKEND}/getOrderDetails/${id_order}`
  );
  const { patch } = usePatch({ url: `${import.meta.env.VITE_URL_BACKEND}/cancelOrder/${id_order}` });
  
  const currentStatus = data?.[0]?.name_status || 'En carrito';
  const events = fixedStatusOrder
    .filter((status) => fixedStatusOrder.indexOf(status) <= fixedStatusOrder.indexOf(currentStatus))
    .map((status) => ({ status }));

  if (loading) return <Page><span>Loading...</span></Page>;
  if (error) return <Page><span>Error loading order details.</span></Page>;
  if (data?.length === 0 || !id_order) navigate('/404');
  const cancelOrder = () => {
    patch(null);
    navigate(routes.home);
  };

  return (
    <Page>
      <Flex>
        {data && data.length > 0 && data[0].name_status !== 'Cancelada' ? (
          <>
             <Cat />
          <TimelineContainer>
            <Timeline
              value={events}
              align='left'
              content={(item) => <p>{item.status}</p>}
            />
          </TimelineContainer>
          </>
        ) : <Canceled />}
      </Flex>
      <div>
        <Flex>
          <Button label='volver' onClick={() => navigate(routes.orders)} severity='secondary' icon='pi pi-arrow-left' />
          <Button label='volver a la tienda' onClick={() => navigate(routes.home)} severity='success' icon='pi pi-home' />
          {data && data.length > 0 && data[0].name_status !== 'Cancelada' && (
            <Button label="Comprobante de pago" icon="pi pi-print" severity="success" 
            onClick={() => navigate(`${routes.Invoice}/${id_order}`)}
            />
          )}
             {data && data[0].name_status === 'Pendiente' && (
        <Button label='cancelar' onClick={cancelOrder} severity='danger' icon='pi pi-times' />
      )}
        </Flex>
      </div>
    </Page>
  );
};

export default ViewOrder;
