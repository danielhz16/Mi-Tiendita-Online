import * as yup from "yup";

const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

export const registerSchema = yup.object({
  full_name: yup
    .string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  email: yup
    .string()
    .required("El email es requerido")
    .email("El correo debe ser válido"),
  password: yup
    .string()
    .required("La contraseña es requerida")
    .min(5, "La contraseña debe tener al menos 6 caracteres"),
  role: yup.number().required("El rol es requerido"),
  birth_date: yup
    .date()
    .required("La fecha de nacimiento es requerida")
    .max(eighteenYearsAgo, "Debes tener al menos 18 años para registrarte"),
}).required();
