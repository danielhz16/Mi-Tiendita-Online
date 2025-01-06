import { Card } from './styledComponents/Card';
import { OrderInteface } from '../../interfaces/OrderInterface';
import { Button } from 'primereact/button';
import { usePatch } from '../../../../../general/hooks/usePatch/usePatch';
import { useState } from 'react';
import { Flex } from '../../../../../general/styledComponents/Flex';
import { ModalUpdate } from '../modalUpdate/ModalUpdate';
import { Tag } from 'primereact/tag';
import { formatDate } from '../../../../../general/functions/formatDate';

export const OrderCard: React.FC<{ order: OrderInteface, fun: () => void }> = ({ order, fun }) => {
  const { patch } = usePatch({url: `${import.meta.env.VITE_URL_BACKEND}/updateOrderStatus/${order.id_order}`, headers: { 'Content-Type': 'application/json' }});
  const [delivery, setDelivery] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const toggleUpdate = () => setUpdate(!update);


  const succes = () => fun();
  if (!delivery) return (
    <>
        {update && <ModalUpdate toggle={toggleUpdate} id={order.id_order} name={order.full_name}
        funSuccess={succes}
        />}
    <Card>
      <div>
        <h2>{order.full_name}</h2>
        <Tag value={order.name_status} severity='success'
         />
        <p><strong>ID:</strong> {order.id_order}</p>
        <p><strong>Total:</strong> GTQ{order.total.toFixed(2)}</p>
        <p>
  <strong>Fecha de entrega:</strong> 
  {formatDate(order.delivery_date)}
</p>
  
      </div>
     
        <Flex className='ml-auto'>
      <Button label='Entregar' icon='pi pi-check' severity='success' 
      onClick={() => patch({ new_status: 8 },succes)} />
      <Button label='Cambiar Estado'  icon='pi pi-refresh'
      onClick={toggleUpdate} />
      </Flex>
    </Card>
    </>
  );
};
