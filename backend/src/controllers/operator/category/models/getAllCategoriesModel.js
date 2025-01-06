import { getConnections } from "../../../../config/database.js";
import sql from "mssql";

export const getAllCategoriesModel = async () => {
    try {
        const pool = await getConnections();
        const request = new sql.Request(pool);
        const response = await request.query("SELECT * FROM AllInfoCategories");
        return response.recordset;
    } catch (error) {
        throw new Error(error); 
    }    
}