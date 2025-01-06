import { useState, useEffect } from "react";
import { FieldErrors } from "react-hook-form";
import { errorToast } from "./notifications/error";

export const useError = () => {
    const [error, setError] = useState<string | null>(null);

    const handleErrors = (errors: FieldErrors) => {
        if (errors && Object.keys(errors).length > 0) {
            const firstError = Object.values(errors)[0]; // Obtener el primer error
            setError(firstError?.message || "Ocurrió un error");
        }
    };

    useEffect(() => {
        if (error) {
            errorToast(error);
            setError(null);    
        }
    }, [error]);

    return { handleErrors };
};
