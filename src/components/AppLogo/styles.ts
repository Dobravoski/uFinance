import { StyleSheet } from "react-native";
import { colors } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  image: {
    resizeMode: "contain",
  },
});