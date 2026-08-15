import { StyleSheet } from "react-native";
import { radius, spacing, metrics } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
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
