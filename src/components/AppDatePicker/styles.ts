import { StyleSheet } from "react-native";
import { colors, radius, spacing, metrics } from "@/theme";

export const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: metrics.strokeWidth,
    borderColor: colors.border,
    borderRadius: radius.md,

    backgroundColor: colors.surface,

    paddingHorizontal: spacing.md,

    minHeight: metrics.inputHeight,

    justifyContent: "center",
  },

  inputContainerError: {
    borderColor: colors.danger,
  },

  text: {
    color: colors.text,
  },

  placeholder: {
    color: colors.textSecondary,
  },
});
