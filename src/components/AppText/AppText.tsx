import { Text } from "react-native";
import { textVariants } from "@/theme";
import { styles } from "./styles"
import type { AppTextProps } from "./types"

export const AppText = ({children, variant="body", style, ...rest}: AppTextProps) => {
    return (
        <Text style={[styles.base, textVariants[variant], style]} {...rest}>
            {children}
        </Text>
    )
}