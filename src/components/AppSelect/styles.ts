import { StyleSheet } from "react-native";
import type { PickerStyle } from "react-native-picker-select";

import { colors, metrics, spacing, radius } from "@/theme";

export const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: metrics.strokeWidth,
    borderColor: colors.border,
    borderRadius: radius.md,

    backgroundColor: colors.surface,

    paddingHorizontal: spacing.md,
  },

  inputContainerError: {
    borderColor: colors.danger,
  },
});

export const pickerStyles = {
  inputIOS: {
    color: colors.text,
    paddingVertical: spacing.md,
    paddingRight: spacing.xl,
  },

  inputAndroid: {
    color: colors.text,
    paddingVertical: spacing.md,
    paddingRight: spacing.xl,
  },

  placeholder: {
    color: colors.textSecondary,
  },

  iconContainer: {
    top: metrics.pickerIconTop,
    right: 0,
  },

  viewContainer: {
    justifyContent: "center",
  },
} satisfies PickerStyle;
