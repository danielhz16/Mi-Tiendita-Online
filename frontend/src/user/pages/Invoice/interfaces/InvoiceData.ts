export interface ProductsInterface {
   name: string;
   price: number;
   quantity: number;
   subtotal: number;
   id_products: number;
};

export interface OrderInterface {
  id_order: number;
  total: number;
  full_name: string;
}

