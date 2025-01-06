export interface AxiosInterface<T> {
    data: T | null;         
    error: string | null;   
    loading: boolean;
    reloadData: () => void;
  }
  