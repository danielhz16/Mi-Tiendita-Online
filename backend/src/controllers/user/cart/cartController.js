import { getCartModel } from "./models/getCartModel.js";
import { addProductToCartModel } from "./models/addProductModel.js";
import { updateQuantityModel } from "./models/updateQuantityModel.js";
import { getCartIdModel } from "./models/GetCartIdModel.js";

//get
export const getCart = async (req, res) => {
    const id_user = req.user.id;
    try {
        const response = await getCartModel({ id_user });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};

//get
export const getCartId = async (req, res) => {
    const id_user = req.user.id;
    try {
        const response = await getCartIdModel({ id_user });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};

//post 
export const addProductToCart = async (req, res) => {
    const id_user = req.user.id;
    const { product_id, quantity } = req.body;
    try {
        const response = await addProductToCartModel({ id_user, product_id, quantity });
        res.status(200).json('Producto agregado al carrito');
    } catch(error) {
        res.status(500).json(error.message);
        console.log(error);
    }
}

//post 
export const updateQuantity = async (req, res) => {
    const id_user = req.user.id;
    const { product_id, quantity } = req.body;
    try {
        const response = await updateQuantityModel({ id_user, product_id, quantity });
        res.status(200).json('exito')
    } catch(error) {
        res.status(500).json(error.message);
        console.log(error);
    }
}
