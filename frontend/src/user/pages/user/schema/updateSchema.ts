import * as yup from "yup";

export const updateSchema = yup.object( {
 full_name: yup
    .string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
 birth_date: yup
    .date() 
    .required("La fecha de nacimiento es requerida"),
 email: yup
    .string()
    .email("El email debe ser una direccion de correo valida")
    .required("El email es requerido"),
}).required();

