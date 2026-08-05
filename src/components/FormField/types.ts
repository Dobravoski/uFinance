import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";

export interface FormFieldProps {
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}