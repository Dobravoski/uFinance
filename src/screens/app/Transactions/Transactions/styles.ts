import { StyleSheet } from "react-native";
import { colors, spacing } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  contentContainer: {
    flexGrow: 1,
    padding: spacing.md,
  },

  listContent: {
    gap: spacing.sm,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
  },

  emptyText: {
    color: colors.textSecondary,
    textAlign: "center",
  },

  loading: {
    marginTop: spacing.lg,
  },
});