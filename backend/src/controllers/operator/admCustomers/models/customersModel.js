import { getConnections } from '../../../../config/database.js';

export const getCustomersWithMoreOrders = async () => {
  const pool = await getConnections();
  try {
    const result = await pool.request().query('SELECT * FROM CustomersWithMoreOrders');
    return result.recordset; 
  } catch (error) {
    throw new Error('Error al obtener los clientes con más pedidos: ' + error.message);
  }
};
