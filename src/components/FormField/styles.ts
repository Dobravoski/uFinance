import { StyleSheet } from "react-native";
import { spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    gap: spacing.xs,
  },

  error: {
    color: colors.danger,
  },
});
