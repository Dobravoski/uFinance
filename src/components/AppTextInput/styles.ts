import { StyleSheet } from "react-native";
import { metrics, radius, spacing } from "@/theme";
import type { ThemeColors } from "@/theme/colors";

export const createStyles = (colors: ThemeColors) => StyleSheet.create({
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
