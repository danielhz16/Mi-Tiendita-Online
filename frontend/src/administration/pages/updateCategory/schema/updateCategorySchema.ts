import * as yup from 'yup';

export const updateCategorySchema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio')
     .min(3, 'El nombre debe tener al menos 3 caracteres')
}).required();