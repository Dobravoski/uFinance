import { TextInput, View } from "react-native";
import { FormField } from "../FormField";
import { styles } from "./styles";
import type { AppTextInputProps } from "./types";

export const AppTextInput = ({label, containerStyle, inputStyle, leftAccessory, rightAccessory, error, ...rest}: AppTextInputProps) => {
  return (
    <FormField label={label} error={error} containerStyle={containerStyle}>
      <View style={[styles.inputContainer, error && styles.inputContainerError]}>
        {leftAccessory}

        <TextInput style={[styles.input, inputStyle]} {...rest} />

        {rightAccessory}
      </View>
    </FormField>
  );
};
