import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "@/theme";

export const styles = StyleSheet.create({
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