import { useMemo } from "react";
import { Pressable } from "react-native";
import { AppButtonProps } from "./types";
import { createStyles } from "./styles";
import { createButtonVariants } from "./variants";
import { AppText } from "../AppText";
import { useTheme } from "@/hooks/useTheme";
import { useThemedStyles } from "@/hooks/useThemedStyles";

export const AppButton = ({title, variant="primary", disabled, style, ...rest}: AppButtonProps) => {
    const { colors } = useTheme();
    const styles = useThemedStyles(createStyles);
    const buttonVariants = useMemo(() => createButtonVariants(colors, styles), [colors, styles]);

    const currentVariant = buttonVariants[variant];
    const textStyle = {color: currentVariant.textColor}

    return (
        <Pressable
            disabled={disabled}
            style={({pressed}) => [styles.base, currentVariant.container, pressed && !disabled && styles.pressed, style]}
            {...rest}
        >
            <AppText style={textStyle}>
                {title}
            </AppText>
        </Pressable>
    )
}