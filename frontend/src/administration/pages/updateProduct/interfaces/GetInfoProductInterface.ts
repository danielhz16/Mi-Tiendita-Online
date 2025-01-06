export interface GetInfoProductInterface {
    id_product: number;
    name: string;
    photo: File | string; 
    brand: string;
    price: number;
    description: string;
    stock: number;
    code: string;
    name_category: string;
    id_category_products: number;

}



