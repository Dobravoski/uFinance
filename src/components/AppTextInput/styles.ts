import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        gap: spacing.xs
    },

    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,

        paddingHorizontal: spacing.md,
        paddingVertical: spacing.md,

        backgroundColor: colors.surface,
        color: colors.text
    }
})