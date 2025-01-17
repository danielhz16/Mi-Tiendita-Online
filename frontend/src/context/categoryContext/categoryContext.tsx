import { createContext, useContext, useState } from "react";
import { CategoriesInterface } from "../../administration/interfaces/CategoriesInterface";
import { CategoryContextInterface } from "./interfaces/categoryContextInterface";
import useAxios from "../../general/hooks/useAxios/useAxios";

const CategoryContext = createContext<CategoryContextInterface | undefined>(undefined);

export const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, loading, error, setData } = useAxios<CategoriesInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getAllCategories`);
    const changeName = (id: number, name: string) => {
        const category = data?.find((category) => category.id_category_products === id);
        if (category) {
            category.name_category = name;
            setData([...data!]); 
        }
    };

    return (
        <CategoryContext.Provider value={{
            data: data ?? [],
            loading,
            error,
            changeName,
            setData,
        }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => {
    const context = useContext(CategoryContext);
    if (!context) throw new Error("useCategories must be used within a CategoriesProvider");
    return context;
};
