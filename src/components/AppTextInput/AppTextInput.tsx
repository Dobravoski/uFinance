import { TextInput, View } from "react-native";
import { AppText } from "../AppText";
import { styles } from "./styles";
import type { AppTextInputProps } from "./types";

export const AppTextInput = ({label, containerStyle, inputStyle, leftAccessory, rightAccessory, error, ...rest}: AppTextInputProps) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <AppText variant="label">
                {label}
            </AppText>

            <View style={[styles.inputContainer, error && styles.inputContainerError]}>
                {leftAccessory}

                <TextInput style={[styles.input, inputStyle]} {...rest} />

                {rightAccessory}
            </View>

            {error && (<AppText variant="caption" style={styles.error}>{error}</AppText>)}
        </View>
    )
}