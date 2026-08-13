import { StyleSheet } from "react-native";
import { colors, radius, spacing, metrics} from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.md,
  },

  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: spacing.sm,

    borderWidth: 1,
    borderColor: colors.border,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },

  incomeIcon: {
    color: colors.success,
    width: metrics.iconSize.md,
    height: metrics.iconSize.md,
  },

  expenseIcon: {
    color: colors.danger,
    width: metrics.iconSize.md,
    height: metrics.iconSize.md,
  },

  incomeValue: {
    color: colors.success,
  },

  expenseValue: {
    color: colors.danger,
  },
});