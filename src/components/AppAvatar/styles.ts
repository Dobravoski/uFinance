import { StyleSheet } from "react-native";
import { colors, metrics, radius, shadows } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: radius.full,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.sm,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  pressed: {
    opacity: metrics.pressedOpacity,
  },
});

export const avatarSizes = {
  sm: metrics.avatarSize.sm,
  md: metrics.avatarSize.md,
  lg: metrics.avatarSize.lg,
  xl: metrics.avatarSize.xl,
};

export const iconSizes = {
  sm: metrics.iconSize.sm,
  md: metrics.iconSize.md,
  lg: metrics.iconSize.lg,
  xl: metrics.iconSize.xl,
};

export const iconProps = {
  color: colors.primary,
  strokeWidth: metrics.strokeWidth,
};