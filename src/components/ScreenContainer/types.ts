import type { ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import type { Edge } from "react-native-safe-area-context";

export interface ScreenContainerProps {
  children?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  scrollable?: boolean;
  edges?: Edge[];
}