import { getConnections } from "../../../../config/database.js";

export const getOrdersModel = async () => {
    const pool = await getConnections();
    try {
       const response = pool.request().query("SELECT * FROM GetOrders");
       return response;
    } catch (error) {
        throw new Error(error);
    }
};