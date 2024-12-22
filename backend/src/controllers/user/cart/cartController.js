import { getCartModel } from "./models/getCartModel.js";

//get
export const getCart = async (req, res) => {
    const id_user = req.user.id;
    try {
        const response = await getCartModel({ id_user });
        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};