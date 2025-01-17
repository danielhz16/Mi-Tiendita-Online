import { usePut } from '../../../general/hooks/usePut/usePut';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateCategorySchema } from './schema/updateCategorySchema';
import { UpdateCategoryInterface } from './interface/UpdateCategoryInterface';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Overlay } from '../../../general/styledComponents/Overlay';
import { Modal } from '../../../general/styledComponents/Modal';
import { Flex } from '../../../general/styledComponents/Flex';
import { useCategories } from '../../../context/categoryContext/categoryContext';


const UpdateCategory: React.FC<UpdateCategoryInterface> = ({id, originalName, close}) => {
  const { put, loadingPut } = usePut({ url: `${import.meta.env.VITE_URL_BACKEND}/editCategory/${id}`, headers: { 'Content-Type': 'application/json' } });
  const { register, handleSubmit, formState: { errors } } = useForm<UpdateCategoryInterface>({
    resolver: yupResolver(updateCategorySchema)
  });
  const { changeName } = useCategories();
  const  submit = (data: UpdateCategoryInterface) => {
    put(data,() => {
       changeName(Number(id), data.name),
       close && close();
    });
  }
  return (
    <>
    <Overlay />
    <Modal>
      <form onSubmit={handleSubmit(submit)}>
        <h3>{originalName}</h3>
       <FloatLabel className='mb-auto'>
        <InputText
          id='name'
          type='text'
          {...register('name')}
          className={errors.name ? 'p-invalid' : ''}
        />
        <label htmlFor='name'>Nombre</label>
       </FloatLabel>
       <Flex>
        <Button type='submit' label='Guardar' loading={loadingPut} icon='pi pi-save' />
        <Button type='button' label='Cancelar' icon='pi pi-times' severity='danger' onClick={close} />
       </Flex>
      </form>
    </Modal>
    </>
  )
};

export default UpdateCategory;