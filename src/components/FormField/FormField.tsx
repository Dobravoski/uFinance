import { View } from "react-native";
import { AppText } from "../AppText";
import { styles } from "./styles";
import type { FormFieldProps } from "./types";

export function FormField({label, error, containerStyle, children}: FormFieldProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <AppText variant="label">
          {label}
        </AppText>
      )}

      {children}

      {error && (
        <AppText variant="caption" style={styles.error}>
          {error}
        </AppText>
      )}
    </View>
  );
}