import { StyleSheet } from "react-native";
import { colors, metrics, radius, spacing } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: colors.surface,

    borderRadius: radius.md,
    borderWidth: metrics.strokeWidth,
    borderColor: colors.border,

    overflow: "hidden",
  },

  accent: {
    width: spacing.xs,
  },

  incomeAccent: {
    backgroundColor: colors.success,
  },

  expenseAccent: {
    backgroundColor: colors.danger,
  },

  content: {
    flex: 1,
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

  category: {
    color: colors.text,
  },

  date: {
    color: colors.textSecondary,
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

  descriptionContainer: {
    marginTop: spacing.md,
    paddingTop: spacing.md,

    borderTopWidth: metrics.strokeWidth,
    borderTopColor: colors.border,
  },

  description: {
    color: colors.textSecondary,
  },
});

export const iconProps = {
  strokeWidth: metrics.strokeWidth,
};