import * as yup from "yup";

export const loginSchema = yup.object({
    email: yup
        .string() 
        .required("El email es requerido")
        .email("El correo debe ser válido"),
    password: yup
        .string() 
        .required("La contraseña es requerida")
}).required();
