import { Carousel } from "primereact/carousel";
import useAxios from "../../../../../general/hooks/useAxios/useAxios";
import ProductTemplate from "./ProductTemplate";

const BestSellers = () => {
  const { data, loading, error } = useAxios(`${import.meta.env.VITE_URL_BACKEND}/bestSellers`);
  const products = data?.result?.recordsets?.[0] || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card">
      <ul>
        {products.map((product:any) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellers;
