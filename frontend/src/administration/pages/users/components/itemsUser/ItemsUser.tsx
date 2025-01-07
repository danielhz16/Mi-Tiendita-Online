import { ItemsUserProps } from './interfaces/ItemsUserProps';
import { useState, useRef, useEffect } from 'react';
import Options from './options/Options';
import { Tag } from 'primereact/tag';
import { formatDate } from '../../../../../general/functions/formatDate';


const ItemsUser: React.FC<ItemsUserProps> = ({ data }) => {
  const [userActive, setUserActive] = useState(data.status__id_status === 1 ? 'Activo' : 'Susendido');
  const [options, setOptions] = useState<number | null>(null);
  const optionRef = useRef<HTMLTableRowElement>(null);
  const toggleStatus = () => setUserActive((prev) => (prev === 'Activo' ? 'Susendido' : 'Activo'));
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
    <>
     <tr ref={optionRef}>
      <td onClick={() => setOptions(options === data.id_users ? null : data.id_users)}>{data.id_users}</td>
      <td>
        {options === data.id_users && <Options id={data.id_users} name={data.full_name} status={userActive} success={toggleStatus} />}
        {data.email}
      </td>
      <td>{data.full_name}</td>
      <td>{formatDate(data.birth_date)}</td>
      <td>{formatDate(data.date_at)}</td>
      <td>{<Tag severity={userActive === 'Activo' ? 'success' : 'danger'}>{userActive}</Tag>}</td>
      <td>{data.status__id_status === 1 ? 'Operador' : 'Usuario'}</td>
     </tr>
    </>
  )
};

export default ItemsUser;