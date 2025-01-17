import { InfoCompleteProductInterface } from "../../../administration/interfaces/InfoCompleteProductInterface";


export interface ProductsInterface {
    data: InfoCompleteProductInterface[];
    loading: boolean;
    error: any;
    addStockByCode: (code: string, stock: number) => void;
    getProduct: (id: number) => InfoCompleteProductInterface | undefined;
    reloadData: () => void;
    setData: React.Dispatch<React.SetStateAction<InfoCompleteProductInterface[] | null>>
    updateDataProduct: (res: InfoCompleteProductInterface) => void
  }
  