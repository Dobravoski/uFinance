import { StyleSheet } from "react-native";
import { colors, metrics, radius, shadows, spacing } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",

    right: spacing.md,
    bottom: spacing.md,

    width: metrics.fabSize,
    height: metrics.fabSize,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,

    borderRadius: radius.full,

    ...shadows.md,
  },

  pressed: {
    opacity: metrics.pressedOpacity,
  },

  icon: {
    width: metrics.iconSize.lg,
    height: metrics.iconSize.lg,
    color: colors.surface,
  },
});

export const iconProps = {
  strokeWidth: metrics.strokeWidth,
};