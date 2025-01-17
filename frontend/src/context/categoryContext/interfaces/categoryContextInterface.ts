import { CategoriesInterface } from "../../../administration/interfaces/CategoriesInterface";

export interface CategoryContextInterface {
    data: any[];
    loading: boolean;
    error: any;
    changeName: (id: number, name: string) => void;
    setData: React.Dispatch<React.SetStateAction<CategoriesInterface[] | null>>
}