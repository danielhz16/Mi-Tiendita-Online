import React from "react";
import { InputIcon } from "./styledComponents/InputIcon";
import { InputText } from "primereact/inputtext";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../routes/routes";

interface SearchFormInputs {
  search: string;
}

const Search: React.FC = () => {
  const { register, handleSubmit } = useForm<SearchFormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<SearchFormInputs> = (data) => {
    navigate(`${routes.search}/${data.search}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputIcon>
        <button className="pi pi-search" type="submit" />
        <InputText placeholder="buscar..." {...register("search")} />
      </InputIcon>
    </form>
  );
};

export default Search;