import { StyleSheet } from "react-native";

import {
  colors,
  metrics,
  spacing,
} from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  contentContainer: {
    flexGrow: 1,
    padding: spacing.md,
    gap: spacing.md,
  },

  listContent: {
    gap: spacing.sm,
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

  addButton: {
    width: "100%",
  },

  loading: {
    marginTop: spacing.lg,
  },
});