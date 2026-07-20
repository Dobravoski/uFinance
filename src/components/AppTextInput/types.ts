import { ReactNode } from "react";
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from "react-native";

export interface AppTextInputProps extends TextInputProps {
  label: string;

  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;

  leftAccessory?: ReactNode;
  rightAccessory?: ReactNode;

  error?: string;
}