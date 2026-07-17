import { TextInput, View } from "react-native";
import { AppText } from "@/components";
import { styles } from "./styles";
import type { AppTextInputProps } from "./types";

export const AppTextInput = ({label, style, ...rest}: AppTextInputProps) => {
    return (
        <View style={styles.container}>
            <AppText variant="label">
                {label}
            </AppText>

            <TextInput style={[styles.input, style]} {...rest} />
        </View>
    )
}