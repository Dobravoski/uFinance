import { StyleSheet } from "react-native";
import { metrics, radius, spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  avatarContainer: {
    marginBottom: spacing.xl,
  },

  form: {
    width: "100%",
    gap: spacing.lg,
  },

  field: {
    width: "100%",
  },

  displayField: {
    minHeight: metrics.inputHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
  },

  displayContent: {
    flex: 1,
    gap: spacing.xs,
  },

  editButton: {
    width: metrics.iconSize.lg,
    height: metrics.iconSize.lg,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.full,
  },

  pressed: {
    opacity: metrics.pressedOpacity,
  },

  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  actions: {
    gap: spacing.sm,
  },
});

export const createIconProps = (colors: ThemeColors) => ({
  color: colors.primary,
  size: metrics.iconSize.md,
  strokeWidth: metrics.strokeWidth,
});
