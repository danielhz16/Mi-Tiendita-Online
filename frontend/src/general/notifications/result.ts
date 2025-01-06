import toast from "react-hot-toast";

export const error = (message: string) => toast.error(message);
export const success = (message: string) => toast.success(message);