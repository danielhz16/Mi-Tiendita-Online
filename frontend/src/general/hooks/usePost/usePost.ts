import { useState } from "react";
import axios from "axios";
import { getToken } from "../../functions/getToken";
import { error, success } from "../../notifications/result";

interface PostProps {
  url: string;
  headers?: Record<string, string>;
  hiddenNotify?: boolean;
}

export const usePost = ({ url, headers = {}, hiddenNotify }: PostProps) => {
  const [loadingPost, setLoadingPost] = useState(false);
  const [errorPost, setErrorPost] = useState<string | null>(null);
  const [dataPost, setDataPost] = useState<any>(null);

  const post = (
    data: any,
    funSuccess?: (response: any) => void,
    funError?: () => void,
    errorMessage?: string,
    successMessage?: string
  ) => {
    setLoadingPost(true);
    setErrorPost(null);

    axios
      .post(url, data, {
        headers: {
          ...headers,
          Authorization: getToken(),
        },
      })
      .then((res) => {
        console.log(res.data);
        if (!hiddenNotify) success(successMessage || "Éxito");
        if (funSuccess) funSuccess(res.data); 
      })
      .catch((e) => {
        setErrorPost(e.message || "Error occurred");
        if (!hiddenNotify) error(errorMessage || e.response?.data || "Error");
        if (funError) funError();
      })
      .finally(() => {
        setLoadingPost(false);
      });
  };

  return { post, loadingPost, errorPost, dataPost };
};
