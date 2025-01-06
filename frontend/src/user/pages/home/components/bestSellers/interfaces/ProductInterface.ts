export interface ProductInterface {
    id_products: number;
    name: string;
    price: number;
    stock: number;
    image: ArrayBuffer;
    category__id_category: number;
    category_name: number;
    total_sales: number;
}
