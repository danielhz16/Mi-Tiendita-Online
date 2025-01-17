import { getCartService } from "../services/getCartService.js";
import { addProductToCartService } from "../services/addProductService.js";
import { updateQuantityService } from "../services/updateQuantityService.js";
import { getCartIdService } from "../services/getCartIdService.js";


//get
export const getCart = async (req, res) => {
    const id_user = req.user.id;
    try {
        const response = await getCartService({ id_user });
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
        const response = await getCartIdService({ id_user });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error);
    }
};

//post 
export const addProductToCart = async (req, res) => {
    const user_id = req.user.id;
    const { product_id, quantity } = req.body;
    try {
        const response = await addProductToCartService({ user_id, product_id, quantity });
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
        const response = await updateQuantityService({ id_user, product_id, quantity });
        res.status(200).json(response);
    } catch(error) {
        res.status(500).json(error.message);
        console.log(error);
    }
}
