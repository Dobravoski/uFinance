import { StyleSheet } from "react-native";
import { colors, radius, spacing } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        gap: spacing.xs
    },

    input: {
        flex: 1,
        paddingVertical: spacing.md,
        color: colors.text,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",

        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: radius.md,

        paddingHorizontal: spacing.md,

        backgroundColor: colors.surface,
    },

    inputContainerError: {
        borderColor: colors.danger,
    },

    error: {
        color: colors.danger,
    }
})