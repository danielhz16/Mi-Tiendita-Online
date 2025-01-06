import { Button } from "primereact/button";
import { ButtonCartProps } from "./interfaces/ButtonCartProps";
import { useCartContext } from "../../../context/cartContext/CartContext";


const ButtonCart: React.FC<ButtonCartProps> = ({ product_id, quantity, product, stock }) => {
  const { addProductToCart } = useCartContext();
  
  const handleAddToCart = () => addProductToCart(product_id, quantity, product); 
  
  return (
    <Button
      icon="pi pi-shopping-cart"
      className="p-button-rounded button"
      onClick={handleAddToCart}
      disabled={stock === 0} 
    />
  );
};

export default ButtonCart;
