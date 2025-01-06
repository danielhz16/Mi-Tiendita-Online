import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { ProductTemplateProps } from "./interfaces/ProductTemplateProps";
import { ProductInterface } from "./interfaces/ProductInterface";

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
    const getSeverity = (product: ProductInterface) => {
        if (product.stock > 30) {
          return 'success';
        } else if (product.stock > 10) {
          return 'warning';
        } else if (product.stock === 0) {
          return 'danger';
        } else {
          return null;
        }
      };
      
      
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <Tag value={product.stock} severity={getSeverity(product)} />
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductTemplate;