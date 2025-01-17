import * as yup from "yup";

export const customerSchema = yup.object({
    legal_name: yup
        .string()
        .required("El nombre es requerido")
        .min(3, "El nombre debe tener al menos 3 caracteres"),
    trade_name: yup
        .string()
        .required("El nombre comercial es requerido")
        .min(3, "El nombre comercial debe tener al menos 3 caracteres"),
    delivery_address: yup
        .string()
        .required("La direccion es requerida")
        .min(10, "La direccion debe tener al menos 10 caracteres"),
    phone: yup
        .string()
        .required("El telefono es requerido")
        .min(10, "El telefono debe tener al menos 10 caracteres"),
    email: yup
        .string()
        .email("El email debe ser una direccion de correo valida")
        .required("El email es requerido"),
}).required();
   