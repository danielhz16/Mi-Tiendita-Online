import { Form } from "../../general/styledComponents/Form";
import { PageComplete } from "../../general/styledComponents/PageComplete";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import { Calendar } from "primereact/calendar";
import { RegisterInterface } from "./interface/registerInterface";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { roles } from "./utils/roles";
import { registerSchema } from "./schema/registerSchema";
import axios from "axios";
import { routes } from "../../routes/routes";
import { useAuth } from "../../context/authContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { DivForm } from "../../general/styledComponents/DivForm";
import { Flex } from "../../general/styledComponents/Flex";
import { useError } from "../../general/hooks/useError/useError";
import { RegisterAnim } from "./anim/registerAnim/RegisterAnim";
import {error } from "../../general/notifications/result";
import { useEffect } from "react";


const Register = () => {
  const  {handleErrors } = useError()
  const navigate = useNavigate();
  const { login } = useAuth();
  const { register, handleSubmit, control, formState: { errors }, } = useForm<RegisterInterface>({
    resolver: yupResolver(registerSchema),
  });
 
  useEffect(() => {handleErrors(errors)}, [errors])

  const onSubmit: SubmitHandler<RegisterInterface> = (data) => {
    axios
      .post(`${import.meta.env.VITE_URL_BACKEND}/register`, data)
      .then((res) => login(res.data.token))
      .then(() => navigate("/"))
      .catch((e) => error(e.response.data || "Error al registrar"));
  };

  return (
    <PageComplete> 
      <Form onSubmit={handleSubmit(onSubmit)}>
      <DivForm>

        <FloatLabel>
          <InputText
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "p-invalid" : ""}
          />
          <label htmlFor="email">Correo</label>
        </FloatLabel>
        <FloatLabel>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Password
                id="password"
                {...field}
                className={errors.password ? "p-invalid" : ""}
                toggleMask
                feedback={true}
              />
            )}
          />
          <label htmlFor="password">Contraseña</label>
        </FloatLabel>
        <FloatLabel>
          <InputText 
          id="full_name"
          {...register("full_name")}
          className={errors.full_name ? "p-invalid" : ""}
          />
          <label htmlFor="name">Nombre Completo</label>
        </FloatLabel>

          <Controller
            control={control}
            name="role"
            render={({ field }) => (
            <FloatLabel>
              <Dropdown
                id="role"
                {...field}
                options={roles}
                className={errors.role ? "p-invalid" : ""}
              />
              <label htmlFor="role">Rol</label>
            </FloatLabel>
            )}
 />
   

        <label htmlFor="birth_date">Fecha de Nacimiento</label>
        <Controller 
        control={control}
        name="birth_date"
        render={({field}) => (
          <Calendar
          id="birth_date"
          {...field}
          dateFormat="dd/mm/yy"
          className={errors.birth_date ? "p-invalid" : ""}
          />
        )}
        />
        <Flex>
        <Button type="submit">Registrar</Button>
        <Button type="button" severity="danger" onClick={() => navigate(routes.login)}>Iniciar Sesión</Button>
        </Flex>
        </DivForm>
        <DivForm>
        <RegisterAnim />
        </DivForm>
      </Form>
    </PageComplete>
  );
};

export default Register;
