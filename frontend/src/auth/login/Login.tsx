import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Form } from "../../general/styledComponents/Form";
import { AnimView } from "./anim/animView/AnimView";
import Show from "./components/Show";
import Hidde from "./components/Hidde";
import { LoginInterface } from "./interfaces/LoginInterface";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schema/loginSchema";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
import { PageComplete } from "../../general/styledComponents/PageComplete";
import { DivForm } from "../../general/styledComponents/DivForm";
import { error } from "../../general/notifications/result";
import { useError } from "../../general/hooks/useError/useError";
import { useEffect } from "react";

export const Login = () => {
  const { handleErrors } = useError();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }} = useForm<LoginInterface>({
    resolver: yupResolver(loginSchema),
  });

  const togglePassword = () => setViewPassword(!viewPassword);

  const onSubmit: SubmitHandler<LoginInterface> = (data) => {
    axios.post(`${import.meta.env.VITE_URL_BACKEND}/login`, data)
    .then(res =>{
      login(res.data.token)
     navigate('/')}
    )
    .catch(err => error(err.response?.data || "Error"));
  };
 
  useEffect(() => { handleErrors(errors) }, [errors])

  return (
    <PageComplete>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DivForm>
      <AnimView view={viewPassword} />
      </DivForm>
      <DivForm>
        <FloatLabel>
          <InputText
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "p-invalid" : ""}
          />
          <label htmlFor="email">Email</label>
        </FloatLabel>
        {errors.email && <p className="error">{errors.email.message}</p>}

        <FloatLabel>
          <InputText
            id="password"
            type={viewPassword ? "text" : "password"}
            {...register("password")}
            className={errors.password ? "p-invalid" : ""}
          />
          <label htmlFor="password">Password</label>
          {viewPassword ? <Show onClick={togglePassword} /> : <Hidde onClick={togglePassword} />}
        </FloatLabel>
        {errors.password && <p className="error">{errors.password.message}</p>}
        <Button label="Iniciar Sesión" type="submit" />
        </DivForm>
      </Form>
    </PageComplete>
  );
};

export default Login;
