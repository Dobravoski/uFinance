import { StyleSheet } from "react-native";
import { colors, metrics, radius, spacing } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,

    borderRadius: radius.md,
    borderWidth: metrics.strokeWidth,
    borderColor: colors.border,

    padding: spacing.md,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mainContent: {
    flex: 1,
    gap: spacing.xs,
  },

  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },

  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: metrics.iconSize.md,
    height: metrics.iconSize.md,
    color: colors.textSecondary,
  },

  incomeAmount: {
    color: colors.success,
  },

  expenseAmount: {
    color: colors.danger,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: spacing.md,

    marginTop: spacing.md,
    paddingTop: spacing.md,

    borderTopWidth: metrics.strokeWidth,
    borderTopColor: colors.border,
  },

  actionButton: {
    paddingVertical: spacing.xs,
  },

  deleteAction: {
    color: colors.danger,
  },

  descriptionContainer: {
    marginTop: spacing.md,
    paddingTop: spacing.md,

    borderTopWidth: metrics.strokeWidth,
    borderTopColor: colors.border,
  },
});