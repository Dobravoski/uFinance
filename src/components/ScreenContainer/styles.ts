import { StyleSheet } from "react-native";
import { spacing } from "@/theme";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  keyboardAvoiding: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
});