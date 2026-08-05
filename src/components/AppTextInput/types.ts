import { ReactNode } from "react";
import {StyleProp, TextInputProps, TextStyle} from "react-native";
import type { FormFieldProps } from "../FormField";

export interface AppTextInputProps extends TextInputProps, Omit<FormFieldProps, "children" | "label"> {
  label: string;
  inputStyle?: StyleProp<TextStyle>;

  leftAccessory?: ReactNode;
  rightAccessory?: ReactNode;
}
