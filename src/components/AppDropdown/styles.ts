import { StyleSheet } from "react-native";
import { metrics, radius, shadows, spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  trigger: {
    alignSelf: "flex-start",
  },

  overlay: {
    flex: 1,
  },

  dropdown: {
    position: "absolute",

    minWidth: 120,

    backgroundColor: colors.surface,

    borderWidth: metrics.strokeWidth,
    borderColor: colors.border,
    borderRadius: radius.md,

    paddingVertical: spacing.xs,

    ...shadows.md,
  },

  option: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },

  optionText: {
    color: colors.text,
  },

  destructiveText: {
    color: colors.danger,
  },
});
