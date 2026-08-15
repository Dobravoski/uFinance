import { View } from "react-native";
import { AppText } from "../AppText";
import { useThemedStyles } from "@/hooks/useThemedStyles";
import { createStyles } from "./styles";
import type { FormFieldProps } from "./types";

export function FormField({label, error, containerStyle, children}: FormFieldProps) {
  const styles = useThemedStyles(createStyles);

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