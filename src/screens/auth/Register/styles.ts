import { StyleSheet } from "react-native";
import { colors, metrics, spacing } from "@/theme";

export const styles = StyleSheet.create({
    content: {
        justifyContent: "center",
    },

    header: {
        alignItems: "center",
    },

    title: {
        marginTop: spacing.lg,
        textAlign: "center",
    },

    subtitle: {
        marginTop: spacing.sm,
        maxWidth: metrics.formMaxWidth,
        textAlign: "center",
        color: colors.textSecondary,
    },

    form: {
        marginTop: spacing.xxl,
        gap: spacing.md,
    },

    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: spacing.lg,
    },

    footerText: {
        color: colors.textSecondary,
    },

    footerLink: {
        marginLeft: spacing.xs,
        color: colors.primary,
    },

    authErrorText: {
        color: colors.danger,
        textAlign: "center",
    },
});
