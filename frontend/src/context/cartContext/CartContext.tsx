import { useState, createContext, useContext, useEffect } from "react";
import { usePost } from "../../general/hooks/usePost/usePost";
import useAxios from "../../general/hooks/useAxios/useAxios";
import { ReactNode } from "react";
import { ProdcutCartInterface } from "../../user/interfaces/ProductCartInterface";
import { CartContextProps } from "./interfaces/CartContextProps";
import axios from "axios";
import { getToken } from "../../general/functions/getToken";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProveider = ({ children }: { children: ReactNode }) => {
  const { post } = usePost({ url: `${import.meta.env.VITE_URL_BACKEND}/UpdateQuantity` });
  const { post: addProduct } = usePost({ url: `${import.meta.env.VITE_URL_BACKEND}/addProductToCart` });
  const { data } = useAxios<ProdcutCartInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getCart`);
  const [dataResult, setDataResult] = useState<ProdcutCartInterface[]>([]);


  useEffect(() => {
    if (Array.isArray(data)) {
      setDataResult(data);
    }
  }, [data]);
  

  const addProductToCart = (id: number, quantity: number, product: object) => {
    const existingProductIndex = dataResult.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      const updatedData = [...dataResult];
      updatedData[existingProductIndex].quantity += quantity;
      setDataResult(updatedData);
      console.log(updatedData);
    } else {
      setDataResult([
        ...dataResult,
        { ...(product as ProdcutCartInterface), id: id, quantity },
      ]);
    }
    addProduct({ product_id: id, quantity });
  };

  const updateData = async (id: number, quantity: number) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL_BACKEND}/UpdateQuantity`,
        { product_id: id, quantity },
        {
          headers: {
            Authorization: getToken(),
          },
        }
      );
      console.log(response.data);
      setDataResult(response.data); 
    } catch (err) {
      console.error("Error al actualizar la cantidad:", err);
    }
  };
  
 
  const clearCart = () => {
    dataResult.forEach((item) => {
      post({ product_id: item.id, quantity: 0 });
    });
    setDataResult([]);
  };

  return (
    <CartContext.Provider value={{ dataResult, updateData, data, addProductToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe ser utilizado dentro de un CartProveider");
  }
  return context;
};
