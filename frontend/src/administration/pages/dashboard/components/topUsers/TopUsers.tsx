import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';
import useAxios from '../../../../../general/hooks/useAxios/useAxios';
import { Container } from './styledComponents/Container';

interface TooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, total_orders } = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <p style={{ margin: 0, fontWeight: 'bold' }}>{name}</p>
        <p style={{ margin: 0 }}>Total Orders: {total_orders}</p>
      </div>
    );
  }
  return null;
};

const TopUsers: React.FC = () => {
  const { data } = useAxios<any>(`${import.meta.env.VITE_URL_BACKEND}/topUsers`);

  return (
    <Container>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#4A90E2', fontSize: 14, fontWeight: 'bold' }}
          /> 
          <YAxis />
          <Legend />
          <Bar 
            dataKey="total_orders" 
            fill="#8884d8" 
            barSize={20} 
            label={{ position: 'top', fill: '#4A90E2', fontSize: 14, fontWeight: 'bold' }}
          />
          <Tooltip content={<CustomTooltip />} />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default TopUsers;
