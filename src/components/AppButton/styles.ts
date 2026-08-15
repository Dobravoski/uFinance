import { StyleSheet } from "react-native";
import { metrics, radius, spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
    base: {
        height: metrics.buttonHeight,

        borderRadius: radius.md,

        justifyContent: "center",
        alignItems: "center",

        paddingHorizontal: spacing.lg,
    },

    primary: {
        backgroundColor: colors.primary,
    },

    secondary: {
        backgroundColor: colors.surface,
        borderWidth: metrics.strokeWidth,
        borderColor: colors.border,
    },

    pressed: {
        opacity: metrics.pressedOpacity,
    }
})
