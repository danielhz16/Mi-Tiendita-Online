import { OrderInterface } from "./interfaces/OrderInterface";
import { OrderItemContainer } from "./styledComponents/OrderItemContainer";
import { Flex } from "../../../../../general/styledComponents/Flex";
import { OrderDetails } from "./styledComponents/OrderDetails";
import { Tag } from "primereact/tag";
import { orderStatus } from "./utils/orderStatus";
import { routes } from "../../../../../routes/routes";
import { useNavigate } from "react-router-dom";

const OrderItem: React.FC<{ order: OrderInterface }> = ({ order }) => {
  const currentStatus = orderStatus.find(
    status => status.value === order.status__status_id
  );
 const navigate = useNavigate();
  return (
    <OrderItemContainer onClick={() => navigate(`${routes.viewOrder}/${order.id_order}`)}>
      <OrderDetails>
        <Flex>
          <span>Fecha:</span> {order.date_at}
        </Flex>
        <Flex>
          <span>Total:</span> GTQ{order.total.toFixed(2)}
        </Flex>
        <Flex>
        </Flex>
      </OrderDetails>
      <OrderDetails className="ml-auto">
          <Tag
            severity={currentStatus?.severity || "default"}
            value={currentStatus?.label || "Desconocido"}
          ></Tag>
      </OrderDetails>
    </OrderItemContainer>
  );
};

export default OrderItem;
