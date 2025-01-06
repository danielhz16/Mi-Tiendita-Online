import * as yup from "yup";

export const newCategorySchema = yup.object().shape({
    name: yup.string().required("El nombre es obligatorio"),
    status_category: yup.number().required("El estado de la categoría es obligatorio"),
}).required();