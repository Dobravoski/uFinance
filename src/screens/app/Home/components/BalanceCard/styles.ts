import { StyleSheet } from "react-native";
import { radius, spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.xs,
  },

  label: {
    color: colors.primaryLight,
  },

  balance: {
    color: colors.surface,
  },
});
