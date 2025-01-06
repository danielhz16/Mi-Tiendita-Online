import { ProductInterface } from "../../../../../general/interfaces/ProductInterface";
import { Card } from "./styledComponents/Card";
import { Tag } from "primereact/tag";
import { stockStatus } from "../../../../../general/utils/stockStatus";
import ButtonCart from "../../../../components/buttonCart/ButtonCart";

export const ProductCard: React.FC<{ product: ProductInterface }> = ({ product }) => {
    return (
      <Card  key={product.id_products}>
          <img src={product.photo} alt={product.name} />
           <section>
             <h2>{product.name}</h2>
             <p>  <i className="pi pi-tag" /> {product.name_category}</p>
            <Tag value={stockStatus(product.stock).message} severity={stockStatus(product.stock).severity} />
           </section>
            <section className="price">
             <span className="text-2xl font-semibold">{product.price.toFixed(2)}Q</span>
             <ButtonCart product_id={product.id_products} quantity={1} product={product}/>
            </section>
       </Card>
    )
};