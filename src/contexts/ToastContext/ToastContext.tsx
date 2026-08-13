import { createContext, type PropsWithChildren } from "react";
import Toast from "react-native-toast-message";
import { AppToast } from "@/components/AppToast";
import type {ToastContextData, ShowToastParams} from "./types";

export const ToastContext = createContext<ToastContextData | null>(null);

export function ToastProvider({children}: PropsWithChildren) {
  const showToast = ({type, message}: ShowToastParams) => {
    Toast.show({type, text1: message});
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <Toast
        config={{
          success: ({ text1 }) => (<AppToast type="success" message={text1} />),
          error: ({ text1 }) => (<AppToast type="error" message={text1} />)}}
      />
    </ToastContext.Provider>
  );
}