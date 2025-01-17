import useAxios from "../../general/hooks/useAxios/useAxios";
import { createContext, useContext } from "react";
import { ProductsInterface } from "./interfaces/ProductsInterface";
import { InfoCompleteProductInterface } from "../../administration/interfaces/InfoCompleteProductInterface";
import { usePatch } from "../../general/hooks/usePatch/usePatch";
const ProductsContext = createContext<ProductsInterface | undefined>(undefined);


export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
     const { patch } = usePatch({ url: `${import.meta.env.VITE_URL_BACKEND}/addStockByCode`, headers: { "Content-Type": "application/json" } });
    const { data, loading, error, reloadData, setData } = useAxios<InfoCompleteProductInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getAllProducts`);
    
    const addStockByCode = (code: string, stock: number) => {
        patch({ code, stock }, () => {
            data?.map((product) => product.code === code ? product.stock += stock : product);
         });
    };
     const updateDataProduct = (res: InfoCompleteProductInterface) => {
           setData((prevState) => {
             const updatedData = prevState?.map((product) => 
               product.id_products === res.id_products ? res : product
             );
             return updatedData; 
           });
         };

    const getProduct = (id: number): InfoCompleteProductInterface | undefined => data?.find((p) => p.id_products === id);
     
    return <ProductsContext.Provider value={{
        data: data ?? [],
        loading,
        error,
        addStockByCode,
        getProduct,
        reloadData,
        setData,
        updateDataProduct
    }}>{children}</ProductsContext.Provider>;

};


export const useProductsContext = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProductsContext must be used within a ProductsProvider");
    }
    return context;
};