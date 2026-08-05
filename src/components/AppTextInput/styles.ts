import { StyleSheet } from "react-native";
import { colors, metrics, radius, spacing } from "@/theme";

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingVertical: spacing.md,
        color: colors.text,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",

        borderWidth: metrics.strokeWidth,
        borderColor: colors.border,
        borderRadius: radius.md,

        paddingHorizontal: spacing.md,

        backgroundColor: colors.surface,
    },

    inputContainerError: {
        borderColor: colors.danger,
    }
})
