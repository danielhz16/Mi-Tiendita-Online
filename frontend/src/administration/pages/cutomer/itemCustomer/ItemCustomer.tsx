import { ItemProps } from "./interface/ItemProps"
import Options from "./options/Options";
import { formatDate } from "../../../../general/functions/formatDate";
import { useRef, useEffect, useState } from "react";


const ItemCustomer: React.FC<ItemProps> = ({ data }) => {
  const [options, setOptions] = useState<number | null>(null);
  const { email, legal_name,delivery_address, phone,id_customers,  date_at } = data;
  console.log(data);
  const formateDate = formatDate(date_at);
  console.log(data);
  const optionRef = useRef<HTMLTableRowElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionRef.current && !optionRef.current.contains(event.target as Node)) {
        setOptions(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  })
  return (
    <tr ref={optionRef}>
      <td onClick={() => setOptions(options === id_customers ? null : id_customers)}>
        {id_customers} </td>
      <td>{email}
        {options === id_customers && <Options id={id_customers} />}
      </td>
      <td>{legal_name}</td>
      <td>{formateDate}</td>
      <td>{delivery_address}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default ItemCustomer;
