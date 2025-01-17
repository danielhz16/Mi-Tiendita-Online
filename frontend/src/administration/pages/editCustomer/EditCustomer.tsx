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
import { FormCustomer } from "./styledComponents/FormCustomer";


const EditCustomer: React.FC = () => {
  const {id} = useParams();
  const { register, handleSubmit, control, reset, setValue, formState: { errors } } = useForm<CustomerInterface>({
    resolver: yupResolver(customerSchema)
  });
  const navigate = useNavigate();
  const { data } = useAxios<CustomerInterface>(`${import.meta.env.VITE_URL_BACKEND}/getCustomerById/${id}`);
  const [ existingInfo, setExistingInfo] = useState<string | undefined>(undefined);
  const { post, loadingPost } = usePost({ url: `${import.meta.env.VITE_URL_BACKEND}/newCustomer` });
  const { put, loadingPut } = usePut({ url: `${import.meta.env.VITE_URL_BACKEND}/updateCustomerById/${id}` });
  const { handleErrors } = useError();
  const [dep, setDep] = useState<string | null>(null);
  const [mun, setMun] = useState<string | null>(null);
  const [reference, setReference] = useState<string>("");
  const submitForm: (dataSumit: CustomerInterface) => void = (dataSubmit) => existingInfo ? put(dataSubmit) : post(dataSubmit, () => window.location.reload());

  useEffect(() => {
  
      reset({
        legal_name: data?.legal_name,
        trade_name: data?.trade_name,
        delivery_address: data?.delivery_address,
        phone: data?.phone || "", 
        email: data?.email || "",
      });

  }, [reset, data]);
  
  useEffect(() => {setExistingInfo(data?.email)}, [data]);
  useEffect(() => handleErrors(errors), [errors]); 

  useEffect(() => {
    const address = [dep, mun, reference].filter(Boolean).join(", ");
    setValue("delivery_address", address); 
  }, [dep, mun, reference, setValue]);
  

  return (
    <Page>
      <FormCustomer onSubmit={handleSubmit(submitForm)} className="height" >
        <div>
        <Delivery />
          <Section>
            <label>Nombre Legal</label>
            <InputText 
              type="text" 
              {...register("legal_name")} 
              className={errors.legal_name ? "p-invalid" : ""} 
            />
          </Section>

          <Section>
            <label>Nombre Comercial</label>
            <InputText 
              type="text" 
              {...register("trade_name")} 
              className={errors.trade_name ? "p-invalid" : ""} 
            />
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
                </>
              )}
            />
          </Section>
          </div>
          <div>
          <Section>
            <label>Correo</label>
            <InputText 
              type="email" 
              {...register("email")} 
              className={errors.email ? "p-invalid" : ""} 
            />
          </Section> 
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
        <Flex>
          <Button label={existingInfo  ?  "Actualizar" : "Guardar" } 
          type="submit" icon="pi pi-check" 
          loading={loadingPut || loadingPost}
          />
          <Button label="Cancelar" type="button" icon="pi pi-times" severity="danger" onClick={() => navigate(routes.home)}
          className="mt-2" />
        </Flex> 
        </div>
      </FormCustomer>
    </Page>
  );
};

export default EditCustomer;