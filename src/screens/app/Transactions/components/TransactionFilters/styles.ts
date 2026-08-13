import { StyleSheet } from "react-native";
import { colors, spacing } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },

  typeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  typeLabel: {
    color: colors.text,
  },

  clearText: {
    color: colors.primary,
  },

  dateRow: {
    flexDirection: "row",
    gap: spacing.sm,
  },

  dateField: {
    flex: 1,
  },
});