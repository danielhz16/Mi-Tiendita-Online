import { useParams } from "react-router-dom";
import useAxios from "../../../general/hooks/useAxios/useAxios";
import { AllInfoProductInterface } from "../../interfaces/AllInfoProductInterface";
import { Page } from "../../../general/styledComponents/Page";
import { MainInfo } from "./styledComponents/MainInfo";
import ButtonCart from "../../components/buttonCart/ButtonCart";
import { Flex } from "../../../general/styledComponents/Flex";
import { stockStatus } from "../../../general/utils/stockStatus";
import { Tag } from "primereact/tag";


const ViewProduct: React.FC = () => {
    const { product } = useParams<{ product: string }>();
    const { data, error, loading } = useAxios<AllInfoProductInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/searchProductsById/${product}`);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data || data.length === 0) return <div>No se encontró el producto.</div>;

    const productData = data[0];
    return (
       <Page>
         <MainInfo>
            <Flex>
              <i className="pi pi-tag" />
              <h3>{productData.name_category}</h3>
            </Flex>
            <h2>{productData.name}</h2>
            <div>
              <img src={productData.photo} alt={productData.name} />
            </div>
            <p>{productData.description}</p>
            <Flex>
              <Tag value={stockStatus(productData.stock).message} severity={stockStatus(productData.stock).severity as "success" | "warning" | "danger" | "info" | "secondary" | "contrast"} className="stock-status" />
              <ButtonCart quantity={1} product_id={productData.id_products} product={productData} stock={productData.stock}/>
              <strong className="price">{productData.price} GTQ</strong>
            </Flex>
         </MainInfo>
       </Page>
    );
};

export default ViewProduct;