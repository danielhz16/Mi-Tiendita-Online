import { useState } from "react";
import axios from "axios";
import { getToken } from "../../functions/getToken";
import { error, success } from "../../notifications/result";


interface PatchProps {
    url: string;
    headers?: Record<string, string>;
}

export const usePatch = ({ url, headers = {} }: PatchProps) =>  {
    const [loadingPatch, setLoadingPatch] = useState(false);
    const [errorPatch, setErrorPatch] = useState<string | null>(null);
    
   const patch = (
    data: any,
    funSuccess?: () => void,
    funError?: () => void,
    errorMessage?: string,
    successMessage?: string
   ) => {
    setLoadingPatch(true);
    setErrorPatch(null);

    axios.patch(url, data, {
        headers: {
            ...headers,
            Authorization: getToken(),
        }
    })
    .then((res) => {
        success(successMessage ||  res.data ||'Éxito');
        if (funSuccess) funSuccess();
    })
    .catch((e) => {
        setErrorPatch(e.response); 
        console.log(e);
        error(errorMessage || e.response?.data|| 'Error');
        if (funError) funError();
    })
    .finally(() => {
        setLoadingPatch(false);
    })
   }

    return { loadingPatch, errorPatch, patch };
};