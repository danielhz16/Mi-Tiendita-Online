import * as yup from 'yup';

export const newProductSchema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  brand: yup.string().required('La marca es obligatoria'),
  code: yup.string().required('El código es obligatorio'),
  price: yup.number().required('El precio es obligatorio').positive('El precio debe ser un número positivo'),
  stock: yup.number().required('El stock es obligatorio').min(0, 'El stock no puede ser negativo'),
  category: yup.number().required('La categoría es obligatoria').integer('La categoría debe ser un número entero'),
  status_product: yup.number().required('El estado del producto es obligatorio').integer('El estado del producto debe ser un número entero'),
  description: yup.string().required('La descripción es obligatoria'),
  photo: yup.mixed().required('La foto es obligatoria'),
}).required();