import type { StyleProp, ViewStyle } from "react-native";

export interface AppDatePickerProps {
  label: string;
  value: Date;
  onChange(date: Date): void;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
}