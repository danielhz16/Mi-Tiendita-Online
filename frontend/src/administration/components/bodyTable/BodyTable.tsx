import React from "react";

interface ItemProps {
  data: any;
}

interface BodyProps {
  data: any;
  Item: React.ComponentType<ItemProps>;
}


const BodyTable: React.FC<BodyProps> = ({ data,  Item }) => {
  const correction = Array.isArray(data) ? data : [];
  return (
    <tbody>
      <tr>
        <td>Buscar</td>
      </tr>
      {correction.map((object, index) => (
        <Item key={index} data = {object} />
      ))}
    </tbody>
  );
};

export default BodyTable;
