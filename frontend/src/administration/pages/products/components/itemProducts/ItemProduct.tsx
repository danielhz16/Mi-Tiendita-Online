import { useEffect, useRef, useState } from 'react';
import { ItemProps } from './interfaces/ItemProps';
import Options from './components/options/Options';
import { Tag } from 'primereact/tag';
import { formatDate } from '../../../../../general/functions/formatDate';

const ItemProduct: React.FC<ItemProps> = ({ data }) => {
  const [options, setOptions] = useState<number | null>(null);
  const [info, setInfo] = useState<number | null>(null);
  const [status, setStatus] = useState(data.status__id_status === 1 ? 'Activo' : 'Inactivo');

  const optionsRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setOptions(null);
        setInfo(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleStatusChange = () => {
    setStatus((prev) => (prev === 'Activo' ? 'Inactivo' : 'Activo'));
  };

  return (
    <>
      <tr ref={optionsRef}>
        <td
          onClick={() =>
            setOptions(options === data.id_products ? null : data.id_products)
          }
        >
          {data.code}
        </td>
        <td
          onClick={() =>
            setInfo(info === data.id_products ? null : data.id_products)
          }
        >
          {options === data.id_products && (
            <Options
              id={data.id_products}
              name={data.name}
              funSuccess={handleStatusChange}
              status={status}
              code={data.code}
            />
          )}
          {data.name}
        </td>
        <td>{data.stock}</td>
        <td>
          <i className='pi pi-tag' />
          {data.name_category}
        </td>
        <td>
          <Tag
            value={status}
            severity={status === 'Activo' ? 'success' : 'danger'}
          />
        </td>
      </tr>
      {info === data.id_products && (
        <tr>
          <td colSpan={5} className='info'>
            <h2>Descripción</h2>
            <p className='info'>{data.description}</p>
            <p>
              Agregado el {formatDate(data.date_at)} por <strong>{data.full_name}</strong>
              <br />
              id de usuario: <i>{data.id_users}</i>
            </p>
          </td>
        </tr>
      )}
    </>
  );
};

export default ItemProduct;
