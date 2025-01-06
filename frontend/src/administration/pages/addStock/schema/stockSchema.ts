import * as yup from 'yup';

export const stockSchema = yup.object().shape({
    stock: yup.number().required('El stock es obligatorio').min(0, 'El stock no puede ser negativo'),
    code: yup.string().required('El código es obligatorio'),
}).required();