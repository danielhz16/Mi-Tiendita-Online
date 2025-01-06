import axios from "axios";
import { useEffect, useState } from "react";
import { AxiosInterface } from "./interface/AxiosInterface";
import { getToken } from "../../functions/getToken";


export const useAxios = <T>(url: string): AxiosInterface<T> => {
  const [data, setData] = useState<T | null>(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 
  const [reload, setReload] = useState(false);
  const reloadData = () => setReload(!reload);
  

  useEffect(() => {
    console.log(url);
    if (getToken()) {
      axios.get(url, {
        headers: {
          Authorization: getToken(),
        },
      })
        .then((res) => {
          setData(res.data || []);
        })
        .catch((err) => {
          if (err instanceof Error) {
            setError(err.message); 
          } else {
            setError("Error desconocido");
          }
        })
        .finally(() => {
          setLoading(false); 
        });
    } else {
      setError("Inicia sesión");
      setLoading(false);
    }
  }, [reload]); 

  return { data, loading, error, reloadData }; 
};

export default useAxios;
