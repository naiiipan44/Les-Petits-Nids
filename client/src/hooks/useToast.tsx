import { toast } from "react-toastify";

function useToast() {
  const success = (msg: string) => toast.success(msg);
  const error = (msg: string) => toast.error(msg);

  return { success, error };
}

export default useToast;
