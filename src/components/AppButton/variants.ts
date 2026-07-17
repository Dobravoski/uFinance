import { StyleProp, ViewStyle } from "react-native";
import { colors } from "@/theme";
import { styles } from "./styles";
import type { ButtonVariant } from "./types";

interface ButtonVariantConfig {
    container: StyleProp<ViewStyle>;
    textColor: string;
}

export const buttonVariants: Record<ButtonVariant, ButtonVariantConfig> = {
  primary: {
    container: styles.primary,
    textColor: colors.surface,
  },

  secondary: {
    container: styles.secondary,
    textColor: colors.primary,
  },
};