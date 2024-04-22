import { useContext } from "react";
import { ToastContext } from "../components";

export const useToast = () => {
  return useContext(ToastContext).popToast;
};
