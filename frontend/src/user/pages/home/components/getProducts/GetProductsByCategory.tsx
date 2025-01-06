import React from "react";
import useAxios from "../../../../../general/hooks/useAxios/useAxios";
import { ProductInterface } from "../../../../../general/interfaces/ProductInterface";
import { Container } from "./styledComponents/Container";
import { ProductCard } from "./components/productCard/ProductCard";
import { Tag } from "primereact/tag";

const GetProductsByCategory: React.FC<{ id_category: number }> = ({ id_category }) => {
  const { data,loading } = useAxios<ProductInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getProductsByCategory/${id_category}`);
  if (loading) return <div>Loading...</div>;
 
  if (!data || data.length === 0) return null;
  return (
    <Container>
      <Tag value={data[0]?.name_category} severity="success" className="mx-auto"/>
      <section>
      {data?.map((product) => {
        return (
          <ProductCard product={product} key={product.id_products}/>
        );
      })}
      </section>
    </Container>
  );
};

export default GetProductsByCategory;