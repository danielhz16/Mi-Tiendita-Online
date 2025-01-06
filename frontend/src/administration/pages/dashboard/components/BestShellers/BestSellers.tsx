import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import useAxios from "../../../../../general/hooks/useAxios/useAxios";
import { Container } from "./styledComponents/Container";
import { COLORS } from "./utils/colors";



const BestSellers: React.FC = () => {
  const { data } = useAxios(`${import.meta.env.VITE_URL_BACKEND}/bestSellers`);
  if (!data || !Array.isArray(data)) return <p>Loading...</p>;

  return (
    <Container>
      <strong>Los 10 productos más vendidos</strong>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="total_sales" 
          nameKey="name"  
          cx="50%"
          cy="50%"
         
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Container>
  );
};

export default BestSellers;
