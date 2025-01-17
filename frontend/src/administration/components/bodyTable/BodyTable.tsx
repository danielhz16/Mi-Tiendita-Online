import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import NoProducts from "../noProducts/NoProducts";
interface ItemProps {
  data: any;
}

interface BodyProps {
  data: any[];
  Item: React.ComponentType<ItemProps>;
  lenght: number;
}

const BodyTable: React.FC<BodyProps> = ({ data, Item, lenght }) => {
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const searchData = (value: string) => {
    const lowercasedValue = value.toLowerCase();

    const result = data.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(lowercasedValue)
      )
    );

    setFilteredData(result);
  };

  const correction = Array.isArray(filteredData) ? filteredData : [];

  return (
    <tbody>
      <tr>
        <td colSpan={lenght}>
          <InputText
            placeholder="Buscar..."
            type="search"
            className="search"
            onChange={(e) => searchData(e.target.value)}
          />
        </td>
      </tr>

      {correction.length > 0 ? (
        correction.map((object, index) => <Item key={index} data={object} />)
      ) : (
        <tr>
          <td colSpan={lenght} style={{ textAlign: "center" }} className="no-result">
            <NoProducts />
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default BodyTable;
