import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "@/theme";

export const styles = StyleSheet.create({
    base: {
        height: 52,

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
        borderWidth: 1,
        borderColor: colors.border,
    },

    pressed: {
        opacity: 0.9,
    }
})