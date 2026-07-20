import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ScreenContainerProps {
    children?: ReactNode;
    contentContainerStyle?: StyleProp<ViewStyle>;
}