export interface CartContextProps {
    dataResult: any;
    data: any;
    updateData: (id: number, quantity: number) => void;
    addProductToCart: (id: number, quantity: number, product: object) => void;
    clearCart: () => void;
};