import { Page } from "../../../general/styledComponents/Page";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NewProductInterface } from "./interface/NewProductInterface";
import { newProductSchema } from "./schema/newProductSchema";
import { status } from "./utils/status";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputNumber } from "primereact/inputnumber";
import { Form } from "../../../general/styledComponents/Form";
import { Dropdown } from "primereact/dropdown";
import FileUpload from "../../components/fileUpload/FileUpload";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Flex } from "../../../general/styledComponents/Flex";
import { DivForm } from "../../../general/styledComponents/DivForm";
import { CategoryInterface } from "../../../general/notifications/CategoryInterface";
import { usePost } from "../../../general/hooks/usePost/usePost";
import useAxios from "../../../general/hooks/useAxios/useAxios";
import { useEffect } from "react";
import { useError } from "../../../general/hooks/useError/useError";

const NewProduct: React.FC = () => {
  const { handleErrors } = useError();
  const { data } = useAxios<CategoryInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getCategories`);
  const { post, loadingPost } = usePost({ url: `${import.meta.env.VITE_URL_BACKEND}/newProduct`, headers: { "Content-Type": "multipart/form-data" } });
  const {   control,  register,  handleSubmit,  formState: { errors },  reset } = useForm<NewProductInterface>({
    resolver: yupResolver(newProductSchema),
  });

  useEffect(() => {  handleErrors(errors) }, [errors]);
  const onSubmit: SubmitHandler<NewProductInterface> = (formData) => {
   post(formData, reset);
  };

  return (
    <Page>
      <Form onSubmit={handleSubmit(onSubmit)}>
       <DivForm>
        <FloatLabel>
          <InputText 
            id="name"
            type="text"
            {...register("name")}
            className={errors.name ? "p-invalid" : ""}
          />
          <label htmlFor="name">Nombre</label>
        </FloatLabel>
       
        <FloatLabel>
          <InputText 
            id="brand"
            type="text"
            {...register("brand")}
            className={errors.brand ? "p-invalid" : ""}
          />
          <label htmlFor="brand">Marca</label>
        </FloatLabel>

        <FloatLabel>
          <InputText 
            id="code"
            type="text"
            {...register("code")}
            className={errors.code ? "p-invalid" : ""}
          />
          <label htmlFor="code">Código</label>
        </FloatLabel>
        
        <Flex className="inputs-small">
          <FloatLabel>
            <Controller
              control={control}
              name="stock"
              render={({ field }) => (
                <InputNumber
                  id="stock"
                  {...field}
                  onChange={(e) => field.onChange(e.value)}
                  min={1}
                  className={errors.stock ? "p-invalid" : ""}
                  inputRef={(input) => { if (input) input.autocomplete = "off"; }}
                />
              )}
            />
            <label htmlFor="stock">Stock</label>
          </FloatLabel>

          <FloatLabel>
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <InputNumber
                  id="price"
                  {...field}
                  onChange={(e) => field.onChange(e.value)}
                  min={1}
                  minFractionDigits={2}
                  className={errors.price ? "p-invalid" : ""}
                  inputRef={(input) => {if (input) {input.autocomplete = "off"}}}
                />
              )}
            />
            <label htmlFor="price">Precio</label>
          </FloatLabel>
        </Flex>

        <FloatLabel>
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Dropdown
                id="category"
                {...field}
                options={data?.map((category) => ({ label: category.name_category, value: category.id_category_products }))}
                optionLabel="label"
                className={errors.category ? "p-invalid" : ""}
              />
            )}
          />
          <label htmlFor="category">Categoría</label>
        </FloatLabel>

        <FloatLabel>
          <Controller
            control={control}
            name="status_product"
            render={({ field }) => (
              <Dropdown
                id="status_product"
                {...field}
                options={status}
                optionLabel="label"
                className={errors.status_product ? "p-invalid" : ""}
              />
            )}
          />
          <label htmlFor="status_product">Estado</label>
        </FloatLabel>
  
        <Button type="submit" label="Guardar" loading={loadingPost} icon="pi pi-save"/>
       </DivForm>
       <DivForm>

       <Controller
  control={control}
  name="photo"
  render={({ field }) => (
    <FileUpload
      field={field}
      className={errors.photo ? "p-invalid" : ""}
    />
  )}
/>

        <FloatLabel>
          <InputTextarea
            id="description"
            {...register("description")}
            className={errors.description ? "p-invalid" : ""}
          />
          <label htmlFor="description">Descripción</label>
        </FloatLabel>
       </DivForm>
      </Form>
    </Page>
  );
};

export default NewProduct;