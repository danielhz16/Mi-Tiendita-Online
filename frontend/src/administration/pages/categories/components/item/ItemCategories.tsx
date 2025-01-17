
import { ItemsProps } from "../../../../components/bodyTable/interfaces/ItemsProps";
import { Tag } from "primereact/tag";
import { useState, useRef, useEffect } from "react";
import Options from "./options/Options";
import UpdateCategory from "../../../updateCategory/UpdateCategory";

const ItemCategories: React.FC<ItemsProps> = ({ data }) => {
  const [status, setStatus] = useState(
    data.status__id_status === 1 ? "Activo" : "Inactivo"
  );
  const [info, setInfo] = useState<number | null>(null);
  const [options, setOptions] = useState<number | null>(null);
  const [update, setUpdate] = useState(false);
  const optionsRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setInfo(null);
        setOptions(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOptions = () =>
    setOptions(info === data.id_category_products ? null : data.id_category_products);
  const toggleInfo = () =>
    setInfo(info === data.id_category_products ? null : data.id_category_products);
  const toggleStatus = () =>
    setStatus((prev) => (prev === "Activo" ? "Inactivo" : "Activo"));
  const toggleUpdate = () => setUpdate((prev) => !prev);

  return (
    <>
      {update && (
        <UpdateCategory
          name=""
          originalName={data.name_category}
          id={data.id_category_products}
          close={toggleUpdate}

        />
      )}
      <tr key={data.id_category_products} ref={optionsRef}>
        <td onClick={toggleOptions}>{data.id_category_products}</td>
        <td onClick={toggleInfo}>
          {options && options === data.id_category_products && (
            <Options
              id={data.id_category_products}
              name={data.name_category}
              status={status}
              funSuccess={toggleStatus}
              command={toggleUpdate}
            />
          )}
          {data.name_category}
        </td>
        <td>
          <Tag
            value={status}
            severity={status === "Activo" ? "success" : "danger"}
          />
        </td>
      </tr>
      {info === data.id_category_products && (
        <tr>
          <td colSpan={3} className="info">
            <h3>Creada el: </h3>
            <strong>{new Date(data.date_at).toLocaleString()}</strong>
            <h3>por:</h3>
            <strong>
              {data.full_name} <i>ID: {data.users__id_users}</i>
            </strong>
          </td>
        </tr>
      )}
    </>
  );
};

export default ItemCategories;
