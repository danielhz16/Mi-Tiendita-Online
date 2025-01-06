import React from "react";
import { useForm, Controller } from "react-hook-form";
import { stockSchema } from "./schema/stockSchema";
import { StockInterface } from "./interfaces/stockInterface";
import { Form } from "../../../general/styledComponents/Form";
import { Page } from "../../../general/styledComponents/Page";
import { Button } from "primereact/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { DivForm } from "../../../general/styledComponents/DivForm";
import { Add } from "./anim/add/Add";
import { useProductsContext } from "../../../context/productsCotext/ProductsContext";
import { InputNumber } from "primereact/inputnumber";

const AddStock: React.FC = () => {
  const { addStockByCode } = useProductsContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StockInterface>({
    resolver: yupResolver(stockSchema),
  });

  const onSubmit = (data: StockInterface) => {
    const { code, stock } = data;
    addStockByCode(code, stock);
  };

  return (
    <Page>
      <Form className="p-1" onSubmit={handleSubmit(onSubmit)}>
        <DivForm>
          <Controller
            name="stock"
            control={control}
            render={({ field }) => (
              <FloatLabel>
                <InputNumber
                  value={field.value ?? 0}
                  onValueChange={(e) => field.onChange(e.value)}
                  min={0}
                  className={errors.stock ? "p-invalid" : ""}
                />
                <label htmlFor="stock">Stock</label>
              </FloatLabel>
            )}
          />
          <FloatLabel>
            <InputText
              {...register("code")}
              className={errors.code ? "p-invalid" : ""}
            />
            <label htmlFor="code">Código</label>
          </FloatLabel>
          <Button
            label="Agregar Stock"
            icon="pi pi-plus"
            type="submit"
          />
        </DivForm>
        <Add />
      </Form>
    </Page>
  );
};

export default AddStock;
