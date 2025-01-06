import useAxios from "../../general/hooks/useAxios/useAxios";
import { createContext, useContext } from "react";
import { InfoCompleteProductInterface } from "../../administration/interfaces/InfoCompleteProductInterface";
import { usePatch } from "../../general/hooks/usePatch/usePatch";

interface ProductsInterface {
    data: InfoCompleteProductInterface[];
    loading: boolean;
    error: string | null;
    addStockByCode: (code: string, stock: number) => void;
}
const ProductsContext = createContext<ProductsInterface | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
     const { patch } = usePatch({ url: `${import.meta.env.VITE_URL_BACKEND}/addStockByCode`, headers: { "Content-Type": "application/json" } });
    const { data, loading, error } = useAxios<InfoCompleteProductInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getAllProducts`);
    
    const addStockByCode = (code: string, stock: number) => {
        patch({ code, stock }, () => {
            data?.map((product) => product.code === code ? product.stock += stock : product);
         });
    };
     
    return <ProductsContext.Provider value={{
        data: data ?? [],
        loading,
        error,
        addStockByCode
    }}>{children}</ProductsContext.Provider>;

};


export const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProductsContext must be used within a ProductsProvider");
    }
    return context;
};