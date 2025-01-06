import { useParams } from "react-router-dom";
import useAxios from "../../../general/hooks/useAxios/useAxios";
import { ProductInterface } from "../../../general/interfaces/ProductInterface";
import { ProductCard } from "./components/productCard/ProductCard";
import { Page } from "../../../general/styledComponents/Page";
import Search from "../../components/search/Search";
import { useEffect } from "react";

const SearchResults: React.FC = () => {
    const { search } = useParams<{ search: string }>();
    const { data, error, loading, reloadData } = useAxios<ProductInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/search/${search}`);

    useEffect(() => {
        reloadData();
    }, [search])
    console.log(data);
    return (
        <Page>
            <Search />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data?.map((product) => (
                <ProductCard product={product} />
            ))}
        </Page>
    );
};

export default SearchResults;