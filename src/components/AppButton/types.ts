import type { PressableProps, StyleProp, ViewStyle } from "react-native";

export type ButtonVariant = "primary" | "secondary";

export interface AppButtonProps extends Omit<PressableProps, "style"> {
    title: string;
    variant?: ButtonVariant;
    style?: StyleProp<ViewStyle>;
}