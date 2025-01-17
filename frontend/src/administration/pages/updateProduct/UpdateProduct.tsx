import { useForm, Controller } from "react-hook-form";
import { updateProductSchema } from "./schema/updateProductSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputText } from "primereact/inputtext";
import { Flex } from "../../../general/styledComponents/Flex";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { useParams } from "react-router-dom";
import { UpdateProductInterface } from "./interfaces/UpdateProductInterface";
import FileUpload from "../../components/fileUpload/FileUpload";
import { useEffect} from "react";
import { Form } from "../../../general/styledComponents/Form";
import { DivForm } from "../../../general/styledComponents/DivForm";
import { CategoriesInterface } from "../../interfaces/CategoriesInterface";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { usePut } from "../../../general/hooks/usePut/usePut";
import { Page } from "../../../general/styledComponents/Page";
import { Label } from "../../../general/styledComponents/Label";
import { useError } from "../../../general/hooks/useError/useError";
import { useProductsContext } from "../../../context/productsCotext/ProductsContext";
import useAxios from "../../../general/hooks/useAxios/useAxios";

const UpdateProduct: React.FC = () => {
  const { getProduct, setData, updateDataProduct } = useProductsContext();
  const { handleErrors } = useError();
  const { control, register, handleSubmit, formState: { errors }, reset } = useForm<UpdateProductInterface>({
    resolver: yupResolver(updateProductSchema),
  });

  const { id } = useParams();
  const data = getProduct(Number(id)); 
  const { data: dataCategories } = useAxios<CategoriesInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getCategories`);
  const { put, loadingPut } = usePut({
    url: `${import.meta.env.VITE_URL_BACKEND}/updateProduct/${id}`,
    headers: { "Content-Type": "multipart/form-data" },
  });

  useEffect(() => { handleErrors(errors)}, [errors]);


  useEffect(() => {
    if (data) {
      reset({
        name: data?.name,
        brand: data?.brand,
        code: data?.code,
        price: data?.price,
        stock: data?.stock,
        id_category_products: data?.category__id_category_products,
        description: data?.description,
      });
    }
  }, [data, reset]);

  const submit = (dataSubmit: any) => put(dataSubmit, (res) => updateDataProduct(res), undefined, undefined, 'Producto actualizado');

  return (
    <Page>
      <Form onSubmit={handleSubmit(submit)}>
        <DivForm>
          <Label>
            <label htmlFor="name">Nombre</label>
            <InputText {...register("name")} className={errors.name ? "p-invalid" : ""} />
          </Label>
          <Label>
            <label htmlFor="brand">Marca</label>
            <InputText {...register("brand")} className={errors.brand ? "p-invalid" : ""} />
          </Label>
          <Label>
            <label htmlFor="code">Código</label>
            <InputText {...register("code")} className={errors.code ? "p-invalid" : ""} />
          </Label>
          <Flex className="inputs-small">
            <Label>
              <label htmlFor="price">Precio</label>
              <InputText {...register("price")} className={errors.price ? "p-invalid" : ""} />
            </Label>
            <Label>
              <label htmlFor="stock">Stock</label>
              <Controller
                control={control}
                name="stock"
                render={({ field }) => (
                  <InputNumber
                    value={field.value ?? 0}
                    onValueChange={(e) => field.onChange(e.value)}
                    min={0}
                    className={errors.stock ? "p-invalid" : ""}
                  />
                )}
              />
            </Label>
          </Flex>
          <Label>
            <label htmlFor="category_id">Categoría</label>
            <Controller
              control={control}
              name="id_category_products"
              render={({ field }) => (
                <Dropdown
                  id="category"
                  {...field}
                  options={dataCategories?.map((category) => ({
                    label: category.name_category,
                    value: category.id_category_products,
                  }))}
                  optionLabel="label"
                  className={errors.id_category_products ? "p-invalid" : ""}
                />
              )}
            />
          </Label>
        </DivForm>
        <DivForm>
          <Controller
            control={control}
            name="photo"
            render={({ field }) => <FileUpload field={field} defaultValue={data?.photo} />}
          />
          <Label>
            <label htmlFor="description">Descripción</label>
            <InputTextarea
              id="description"
              {...register("description")}
              className={errors.description ? "p-invalid" : ""}
            />
          </Label>
          <Button label="Actualizar" type="submit" icon="pi pi-check" loading={loadingPut} />
        </DivForm>
      </Form>
    </Page>
  );
};

export default UpdateProduct;
