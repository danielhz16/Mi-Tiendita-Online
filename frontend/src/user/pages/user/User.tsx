import { Page } from "../../../general/styledComponents/Page";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { updateSchema } from "./schema/updateSchema";
import { UpdateUserInterface } from "./interfaces/UpdateUserInterface";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { useEffect } from "react";
import { Button } from "primereact/button";
import { Flex } from "../../../general/styledComponents/Flex";
import useAxios from "../../../general/hooks/useAxios/useAxios";
import { Form } from "../../../general/styledComponents/Form";
import { DivForm } from "../../../general/styledComponents/DivForm";
import { Label } from "../../../general/styledComponents/Label";
import { Update } from "./anim/update/Update";
import { useNavigate } from "react-router-dom";
import { usePut } from "../../../general/hooks/usePut/usePut";
import { useError } from "../../../general/hooks/useError/useError";

const User: React.FC = () => {
  const { handleErrors } = useError();
  const navigate = useNavigate();
  const { put } = usePut({url: `${import.meta.env.VITE_URL_BACKEND}/editUser`, headers: { "Content-Type": "application/json" }});
  const { data } = useAxios<UpdateUserInterface>(`${import.meta.env.VITE_URL_BACKEND}/getUser`);

  const { register, handleSubmit, formState: { errors } , control, reset} = useForm<UpdateUserInterface>({
    resolver: yupResolver(updateSchema)
  });
  useEffect(() => {
      reset({
        full_name: data?.full_name || '',
        email: data?.email || '',
        birth_date: data?.birth_date ? new Date(data?.birth_date) : undefined,
      });  
  }, [data, reset]);
  useEffect(() => { handleErrors(errors) }, [errors]);
  
  return (
    <Page>
      <Form onSubmit={handleSubmit((dataUpdate) => put(dataUpdate))}>
        <DivForm>
        <Label>
        <label htmlFor="full_name">Nombre</label>
        <InputText {...register("full_name")} />
        </Label>
        <Label>
        <label htmlFor="email">Correo</label>
        <InputText {...register("email")} />
        </Label>
        <Label>
        <label htmlFor="birth_date">Fecha de Nacimiento</label>
        <Controller
          control={control}
          name="birth_date"
          render={({ field }) => <Calendar {...field} />}
        />
        </Label>
        <Flex>
          <Button type="submit" label="Actualizar" />
          <Button type="button" label="Cancelar" severity="danger" onClick={() => navigate("/")} />
        </Flex>
        </DivForm>
        <Update />
      </Form>
    </Page>
  );
};

export default User;