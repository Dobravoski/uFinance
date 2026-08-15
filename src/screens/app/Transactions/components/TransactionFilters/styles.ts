import { StyleSheet } from "react-native";
import { spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
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
