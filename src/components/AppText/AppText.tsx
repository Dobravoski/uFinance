import { Text } from "react-native";
import { textVariants } from "@/theme";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles"
import type { AppTextProps } from "./types"

export const AppText = ({children, variant="body", style, ...rest}: AppTextProps) => {
    const styles = useThemedStyles(createStyles);

    return (
        <Text style={[styles.base, textVariants[variant], style]} {...rest}>
            {children}
        </Text>
    )
}