import { StyleSheet } from "react-native";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  image: {
    resizeMode: "contain",
  },
});
