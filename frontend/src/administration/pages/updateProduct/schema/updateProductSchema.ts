import * as yup from "yup";

export const updateProductSchema = yup.object({
   name: yup.string().required('El nombre es obligatorio'),
   description: yup.string().required('La descripción es obligatoria'),
   stock: yup.number().required('El stock es obligatorio').min(0, 'El stock no puede ser negativo'),
   brand: yup.string().required('La marca es obligatoria'),
   price: yup.number().required('El precio es obligatorio').positive('El precio debe ser un número positivo'),
   code: yup.string().required('El código es obligatorio'),
   id_category_products: yup.number().required('La categoría es obligatoria').integer('La categoría debe ser un número entero'),
   photo: yup.mixed().optional()
}).required();


