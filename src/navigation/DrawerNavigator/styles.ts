import { StyleSheet } from "react-native";
import { spacing, textVariants } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.xs,
  },

  userInfo: {
    flex: 1,
    marginLeft: spacing.sm,
  },

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
