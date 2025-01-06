
export interface ProdcutCartInterface {

    photo: string;

    name: string;

    category: string;

    price: number;

    quantity: number;

    id: number;

    onRemove: () => void;
     
    stock: number;

    id_order: number;
}
