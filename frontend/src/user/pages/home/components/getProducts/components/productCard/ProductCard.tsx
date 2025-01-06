import React from "react";
import { Card } from "./styleComponents/Card";
import { ProductInterface } from "../../../../../../../general/interfaces/ProductInterface";
import { routes } from "../../../../../../../routes/routes";
import { useNavigate } from "react-router-dom";
import { Flex } from "../../../../../../../general/styledComponents/Flex";
import ButtonCart from "../../../../../../components/buttonCart/ButtonCart";

export const ProductCard: React.FC<{ product: ProductInterface }> = ({ product }) => {
  const navigate = useNavigate();


  return (
    <Card key={product.id_products} className="item">
      <p>{product.name}</p>
       <img src={product.photo} alt={product.name} onClick={() => navigate(`${routes.viewProduct}/${product.id_products}`)}/>
       <Flex>
      <p>{product.price.toFixed(2)}Q</p>
      <ButtonCart product_id={product.id_products} quantity={1} product={product} stock={product.stock} />
      </Flex>
    </Card>
  );
};