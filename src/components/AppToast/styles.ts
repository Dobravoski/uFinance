import { StyleSheet } from "react-native";
import {
  colors,
  metrics,
  radius,
  shadows,
  spacing,
} from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    minHeight: metrics.inputHeight,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,

    borderRadius: radius.md,

    ...shadows.md,
  },

  success: {
    backgroundColor: colors.success,
  },

  error: {
    backgroundColor: colors.danger,
  },

  iconContainer: {
    marginRight: spacing.sm,
  },

  icon: {
    width: metrics.iconSize.md,
    height: metrics.iconSize.md,
    color: colors.surface,
  },

  message: {
    flex: 1,
    color: colors.surface,
  },
});

export const iconProps = {
  strokeWidth: metrics.strokeWidth,
};