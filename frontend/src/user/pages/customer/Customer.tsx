import { useEffect, useState } from "react";
import { CustomerInterface } from "./interface/CustomerInterface";
import { customerSchema } from "./schema/customerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Page } from "../../../general/styledComponents/Page";
import { InputText } from "primereact/inputtext";
import { PhoneInput } from "react-international-phone";
import locationes from "../../../locations/Guatemala.json";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { useForm, Controller } from "react-hook-form";
import { Form } from "../../../general/styledComponents/Form";
import { DivForm } from "../../../general/styledComponents/DivForm";
import { Delivery } from "./anim/delivery/Delivery";
import { Button } from "primereact/button";
import { Flex } from "../../../general/styledComponents/Flex";
import { usePost } from "../../../general/hooks/usePost/usePost";
import { usePut } from "../../../general/hooks/usePut/usePut";
import { useAxios } from "../../../general/hooks/useAxios/useAxios";
import { Section } from "./styledComponents/Section";
import { useError } from "../../../general/hooks/useError/useError";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { useParams } from "react-router-dom";

const Customer: React.FC = () => {
  const {complete} = useParams();
  const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm<CustomerInterface>({
    resolver: yupResolver(customerSchema)
  });
  const navigate = useNavigate();
  const { data } = useAxios<CustomerInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getCustomer`);
  const [ existingInfo, setExistingInfo] = useState<string | undefined>(undefined);
  const { post, loadingPost } = usePost({ url: `${import.meta.env.VITE_URL_BACKEND}/newCustomer` });
  const { put, loadingPut } = usePut({ url: `${import.meta.env.VITE_URL_BACKEND}/UpdateCustomer` });
  const { handleErrors } = useError();
  const [dep, setDep] = useState<string | null>(null);
  const [mun, setMun] = useState<string | null>(null);
  const [reference, setReference] = useState<string>("");
  const submitForm: (dataSumit: CustomerInterface) => void = (dataSubmit) => existingInfo ? put(dataSubmit) : post(dataSubmit, () => window.location.reload());


  useEffect(() => {
    if (Array.isArray(data)) {
      reset({
        legal_name: data[0].legal_name,
        trade_name: data[0].trade_name,
        delivery_address: data[0].delivery_address,
        phone: data[0]?.phone || "", 
        email: data[0]?.email || "",
      });
    }
  }, [reset, data]);
  
  useEffect(() => {setExistingInfo(data?.[0].email)}, [data]);
  useEffect(() => handleErrors(errors), [errors]); 

  useEffect(() => {
    const address = [dep, mun, reference].filter(Boolean).join(", ");
    setValue("delivery_address", address); 
  }, [dep, mun, reference, setValue]);
  

  return (
    <Page>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Delivery />
        <DivForm>
          <Section>
            <label>Nombre Legal</label>
            <InputText 
              type="text" 
              {...register("legal_name")} 
              className={errors.legal_name ? "p-invalid" : ""} 
            />
            {errors.legal_name && <span className="p-error">{errors.legal_name.message}</span>}
          </Section>

          <Section>
            <label>Nombre Comercial</label>
            <InputText 
              type="text" 
              {...register("trade_name")} 
              className={errors.trade_name ? "p-invalid" : ""} 
            />
            {errors.trade_name && <span className="p-error">{errors.trade_name.message}</span>}
          </Section>

          <Section>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <>
                  <label>Teléfono</label>
                  <PhoneInput
                    defaultCountry="gt"
                    value={field.value}
                    onChange={field.onChange}
                    className={errors.phone ? "p-invalid" : ""}
                  />
                  {errors.phone && <span className="p-error">{errors.phone.message}</span>}
                </>
              )}
            />
          </Section>

          <Section>
            <label>Correo</label>
            <InputText 
              type="email" 
              {...register("email")} 
              className={errors.email ? "p-invalid" : ""} 
            />
            {errors.email && <span className="p-error">{errors.email.message}</span>}
          </Section>
        </DivForm>
        <DivForm>
          <Section>
            <label htmlFor="Departamento">Departamento</label>
            <Dropdown
              options={locationes.map((location) => ({
                label: location.dep,
                value: location.dep,
              }))}
              placeholder="Departamento"
              value={dep}
              onChange={(e) => {
                setDep(e.value);
                setMun(null);
              }}
            />
          </Section>

          {dep && (
            <>
              <Section>
                <label htmlFor="Municipio">Municipio</label>
                <Dropdown
                  options={locationes
                    .find((loc) => loc.dep === dep)
                    ?.mun.map((m) => ({ label: m, value: m })) || []}
                  placeholder="Municipio"
                  value={mun}
                  onChange={(e) => setMun(e.value)}
                />
              </Section>

              <Section>
                <label>Referencia</label>
                <InputTextarea
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                /> 
              </Section>
            </>
          )}

      <Section>
            <label>Dirección</label>
            <InputTextarea 
              {...register("delivery_address")} 
              readOnly 
              placeholder="Dirección" 
              className={errors.delivery_address ? "p-invalid" : ""}
            />
            {errors.delivery_address && <span className="p-error">{errors.delivery_address.message}</span>}
          </Section>
        </DivForm>
        <DivForm>
        <Flex>
          <Button label={existingInfo  ?  "Actualizar" : "Guardar" } 
          type="submit" icon="pi pi-check" 
          loading={loadingPut || loadingPost}
          />
          <Button label="Cancelar" type="button" icon="pi pi-times" severity="danger" onClick={() => navigate(routes.home)} />
        </Flex>
        {existingInfo && complete === 'true' &&	 (
         <Button 
         label="Continuar" 
         type="button" 
         icon="pi pi-arrow-right"
         onClick={() => data && navigate(`${routes.orderComplete}/${data[0].id_users}`)} 
       />
       
          )}
        </DivForm>
      </Form>
    </Page>
  );
};

export default Customer;