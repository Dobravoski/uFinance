import { StyleSheet } from "react-native";
import { colors, metrics, radius, shadows, spacing } from "@/theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.overlay,
  },

  container: {
    width: metrics.modalWidth,

    backgroundColor: colors.surface,

    borderRadius: radius.lg,

    padding: spacing.lg,

    ...shadows.md,
  },

  title: {
    marginBottom: spacing.sm,
  },

  message: {
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },

  actions: {
    flexDirection: "row",
    gap: spacing.sm,
  },

  action: {
    flex: 1,
  },
});