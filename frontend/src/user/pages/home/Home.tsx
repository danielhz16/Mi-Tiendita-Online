import GetProductsByCategory from "./components/getProducts/GetProductsByCategory";
import Search from "../../components/search/Search";
import { Page } from '../../../general/styledComponents/Page';
import 'primeflex/primeflex.css';
import { useAuth } from "../../../context/authContext/AuthContext";
import useAxios from "../../../general/hooks/useAxios/useAxios";

export const Home = () => {
    const { data } = useAxios(`${import.meta.env.VITE_URL_BACKEND}/getCategories`);
    const { logout } = useAuth();
    const results = Array.isArray(data) ? data : [];


    return (
        <Page>
            <Search />
            {results.map((item) => (
                <GetProductsByCategory 
                    key={item.id_category_products} 
                    id_category={item.id_category_products} 
                />
            ))}
            <button onClick={logout}>Logout</button>
        </Page>
    );
};
