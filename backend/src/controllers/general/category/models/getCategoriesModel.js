import { getConnections } from "../../../../config/database.js";

export const getCategoriesModel = async () => {
    const pool = await getConnections();
    try {
        const response = await pool.request().query("SELECT * FROM GetCategories;");
        return response.recordset;
    } catch (error) {
        throw new Error(error);
    }
};