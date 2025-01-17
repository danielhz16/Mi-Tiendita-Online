import axios from "axios";
import { getToken } from "../../functions/getToken";
import { error, success } from "../../notifications/result";
import { useState } from "react";

interface PutProps {
    url: string;
    headers?: Record<string, string>;
    hiddenNotify?: boolean;
}

export const usePut = ({ url, headers = {}, hiddenNotify }: PutProps) => {
    const [loadingPut, setLoadingPut] = useState(false);
    const [errorPut, setErrorPut] = useState<string | null>(null);
    const [dataPut, setDataPut] = useState<any>();

    const getData = () => dataPut

    const put = (
        data: any,
        funSuccess?: (data?: any) => void,
        funError?: () => void,
        errorMessage?: string,
        successMessage?: string
    ) => {
        setLoadingPut(true);
        setErrorPut(null);

        axios
            .put(url, data, {
                headers: {
                    ...headers,
                    Authorization: getToken(),
                },
            })
            .then((res) => {
                if (!hiddenNotify) success(successMessage || res.data || "Éxito");
                if (funSuccess) funSuccess(res.data);
            })
            .catch((e) => {
                setErrorPut(e.message || "Error occurred");
                if (!hiddenNotify) error(errorMessage || e.response?.data || "Error");
                if (funError) funError();
            })
            .finally(() => {
                setLoadingPut(false);
            });
    };

    return { put, loadingPut, errorPut, getData, dataPut };  
};
