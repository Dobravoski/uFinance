import { Pressable } from "react-native";
import { AppButtonProps } from "./types";
import { styles } from "./styles";
import { buttonVariants } from "./variants";
import { AppText } from "../AppText";

export const AppButton = ({title, variant="primary", disabled, style, ...rest}: AppButtonProps) => {

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