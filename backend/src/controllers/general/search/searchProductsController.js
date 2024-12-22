import { searchProductsByNameModel } from "./models/searchByNameModel.js";

//get  //   /search/:name
export const searchProductsByName = async (req, res) => {
    const { name } = req.params;
    try {
        const result = await searchProductsByNameModel({ name });
        return res.status(200).json({ result });
        
    } catch (error) {
        // Manejo de errores internos del servidor
        res.status(500).json({ error: error.message });
    }
};
