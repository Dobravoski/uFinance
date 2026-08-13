import { StyleSheet } from "react-native";
import { colors, spacing } from "@/theme";

export const styles = StyleSheet.create({
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

export const loadingProps = {
  color: colors.primary,
};
