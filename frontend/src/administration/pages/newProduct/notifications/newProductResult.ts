import toast from "react-hot-toast";

export const successfullyCreatedProduct = () => toast.success("Producto creado con exito");
export const errorCreatingProduct = () => toast.error("Error al crear el producto");