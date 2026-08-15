import { TextInput, View } from "react-native";
import { FormField } from "../FormField";
import { useTheme } from "@/hooks/useTheme";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";
import type { AppTextInputProps } from "./types";

export const AppTextInput = ({label, containerStyle, inputStyle, leftAccessory, rightAccessory, error, ...rest}: AppTextInputProps) => {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <FormField label={label} error={error} containerStyle={containerStyle}>
      <View style={[styles.inputContainer, error && styles.inputContainerError]}>
        {leftAccessory}

        <TextInput style={[styles.input, inputStyle]} placeholderTextColor={colors.textSecondary} {...rest} />

        {rightAccessory}
      </View>
    </FormField>
  );
};
