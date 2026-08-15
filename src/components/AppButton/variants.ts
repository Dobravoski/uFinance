import { StyleProp, ViewStyle } from "react-native";
import type { ThemeColors } from "@/theme/colors";
import { createStyles } from "./styles";
import type { ButtonVariant } from "./types";

interface ButtonVariantConfig {
    container: StyleProp<ViewStyle>;
    textColor: string;
}

export const createButtonVariants = (colors: ThemeColors, styles: ReturnType<typeof createStyles>): Record<ButtonVariant, ButtonVariantConfig> => ({
  primary: {
    container: styles.primary,
    textColor: colors.surface,
  },

  secondary: {
    container: styles.secondary,
    textColor: colors.primary,
  },
});
