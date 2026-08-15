import { useMemo } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator"
import { useAuth } from "@/hooks/useAuth"
import { useTheme } from "@/hooks/useTheme"

export default function Navigation() {

    const { user } = useAuth();
    const { scheme, colors } = useTheme();

    const navigationTheme = useMemo(() => {
        const baseTheme = scheme === "dark" ? DarkTheme : DefaultTheme;

        return {
            ...baseTheme,
            colors: {
                ...baseTheme.colors,
                primary: colors.primary,
                background: colors.background,
                card: colors.surface,
                text: colors.text,
                border: colors.border,
            },
        };
    }, [scheme, colors]);

    return (
        <NavigationContainer theme={navigationTheme}>
            {user ? (<AppNavigator/>) : (<AuthNavigator/>)}
        </NavigationContainer>
    )
}