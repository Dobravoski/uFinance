import { StyleSheet } from "react-native";
import { colors, spacing, textVariants } from "@/theme";

export const styles = StyleSheet.create({
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