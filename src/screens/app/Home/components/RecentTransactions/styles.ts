import { StyleSheet } from "react-native";
import { metrics, radius, spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    gap: spacing.md,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },

  viewAllText: {
    color: colors.primary,
  },

  viewAllIcon: {
    color: colors.primary,
    width: metrics.iconSize.sm,
    height: metrics.iconSize.sm,
  },

  list: {
    gap: spacing.sm,
  },

  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  emptyTitle: {
    color: colors.text,
    textAlign: "center",
  },

  emptyMessage: {
    color: colors.textSecondary,
    textAlign: "center",
    marginTop: spacing.xs,
  },
});
