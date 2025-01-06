import axios from "axios";
import { getToken } from "../../functions/getToken";
import { error, success } from "../../notifications/result";
import { useState } from "react";

interface PutProps {
    url: string,
    headers?: Record<string, string>
}

export const usePut = ({ url, headers = {} }: PutProps) => {
    const [ loadingPut, setLoadingPut ]= useState(false);
    const [ errorPut, setErrorPut ]= useState<string | null>(null);

    const put = (
        data: any,
        funSuccess?: () => void,
        funError?: () => void,
        errorMessage?: string,
        successMessage?: string
    ) => {
        setLoadingPut(true);
        setErrorPut(null);

        axios.put(url, data, {
            headers: {      
                ...headers,
                Authorization: getToken(),
            },
        })
        .then((res) => {
            success(successMessage || res.data ||'Éxito'); 
            if (funSuccess) funSuccess();
        })
        .catch((e) => {
            setErrorPut(e.message || "Error occurred");
            error(errorMessage || e.response?.data || "Error");
            if (funError) funError();
        })
        .finally(() => {
            setLoadingPut(false);
        }) 
    };
    
    return { put, loadingPut, errorPut };
};