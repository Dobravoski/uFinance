import { AppTextInputProps } from "@/components/AppTextInput";

export interface PasswordInputProps extends Omit<AppTextInputProps, "secureTextEntry" | "rightAccessory"> {}