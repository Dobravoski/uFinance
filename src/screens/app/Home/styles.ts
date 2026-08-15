import { StyleSheet } from "react-native";
import { spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },

  content: {
    flex: 1,
    gap: spacing.lg,
  },

  topContent: {
    gap: spacing.lg,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
  },
});

export const createLoadingProps = (colors: ThemeColors) => ({
  color: colors.primary,
});
