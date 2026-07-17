import type { ReactNode } from "react"
import type { TextProps } from "react-native"
import type { TextVariant } from "@/theme"

export interface AppTextProps extends TextProps {
    children: ReactNode;
    variant?: TextVariant;
}