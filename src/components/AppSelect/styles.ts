import { StyleSheet } from "react-native";
import type { PickerStyle } from "react-native-picker-select";
import { metrics, spacing, radius } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
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

export const createPickerStyles = (colors: ThemeColors): PickerStyle => ({
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
});
