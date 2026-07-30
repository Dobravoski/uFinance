import { StyleSheet } from "react-native";
import { colors, spacing, textVariants } from "@/theme";

export const styles = StyleSheet.create({
  drawerItem: {
    borderRadius: 8,
  },

  label: {
    ...textVariants.label,
    color: colors.text,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
    marginHorizontal: spacing.md,
  },
});