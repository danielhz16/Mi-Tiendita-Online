import { Form } from "../../../general/styledComponents/Form";
import { DivForm } from "../../../general/styledComponents/DivForm";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewCategoryInterface } from "./interfaces/newCategoryInterface";
import { newCategorySchema } from "./schema/newCategorySchema";
import { Page } from "../../../general/styledComponents/Page";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { useError } from "../../../general/hooks/useError/useError";
import { useEffect } from "react";
import { usePost } from "../../../general/hooks/usePost/usePost";
import { Box } from "./anim/box/Box";
import { Button } from "primereact/button";

const NewCategory: React.FC = () => {
  const { post, loadingPost } = usePost({url: `${import.meta.env.VITE_URL_BACKEND}/newCategory`});
  const { handleErrors } = useError();
  const { register, handleSubmit, formState: { errors }, control } = useForm<NewCategoryInterface>({
    resolver: yupResolver(newCategorySchema)
  });
  useEffect(() => { handleErrors(errors) }, [errors])
  return (
   <Page>
    <Form onSubmit={handleSubmit((dataSubmit) => post(dataSubmit))}>
      <DivForm>
       <FloatLabel>
        <InputText {...register("name")} className={errors.name ? "p-invalid" : ""} />
        <label htmlFor="name">Nombre</label>
       </FloatLabel>
       <Controller
        name="status_category"
        control={control}
        render={({ field }) => (
          <FloatLabel>  
            <Dropdown
              options={[{ label: "Activo", value: 1 }, { label: "Inactivo", value: 0 }]}
              optionLabel="label"
              optionValue="value"
              {...field}
              className={errors.status_category ? "p-invalid" : ""}
            />
            <label htmlFor="status_category">Estado</label>
          </FloatLabel>
        )}
        />
       <Button type="submit" loading={loadingPost} label="Guardar" icon="pi pi-save" />
      </DivForm>
      <DivForm>
        <Box />
      </DivForm>
    </Form>
   </Page>
  )
};

export default NewCategory;