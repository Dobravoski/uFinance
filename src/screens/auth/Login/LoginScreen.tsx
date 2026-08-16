import { View, Pressable } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { createStyles } from "./styles";
import { LoginFormErrors, LoginFormData } from "./types";
import { AppText, AppTextInput, AppButton, ScreenContainer, AppLogo } from "@/components"
import { PasswordInput } from "../components/PasswordInput";
import { useAuth, useThemedStyles } from "@/hooks";
import { AppError } from "@/utils/AppError";
import { validateLoginForm } from "./validation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@/navigation/types";

type NavigationProps = NativeStackNavigationProp<AuthStackParamList>;

export function LoginScreen() {
    const styles = useThemedStyles(createStyles);
    const { t } = useTranslation();

    const { signIn } = useAuth();
    const navigation = useNavigation<NavigationProps>();

    const [formData, setFormData] = useState<LoginFormData>({email: "", password: ""});
    const [formErrors, setFormErrors] = useState<LoginFormErrors>({});
    const [authError, setAuthError] = useState<string | null>(null);

    const handleSignIn = async () => {
        setAuthError(null);

        const validationErrors = validateLoginForm(formData, t);

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
            return;
        }

        setFormErrors({});

        try {
            await signIn(formData.email, formData.password);
        } catch (error) {
            if (error instanceof AppError) {
                setAuthError(error.message);
                return;
            }

            setAuthError(t("common.errors.unexpected"))
        }
    }

    const handleFieldChange = (field: keyof LoginFormData, value: string) => {
        setFormData((previous) => ({
            ...previous,
            [field]: value,
        }));

        if (formErrors[field]) {
            setFormErrors((previous) => ({
                ...previous,
                [field]: undefined,
            }));
        }
    };

    return (
        <ScreenContainer contentContainerStyle={styles.content}>
            <View style={styles.header}>
                <AppLogo size="xl" />

                <AppText variant="heading" style={styles.title}>
                    {t("login.title")}
                </AppText>

                <AppText variant="body" style={styles.subtitle}>
                    {t("login.subtitle")}
                </AppText>
            </View>

            <View style={styles.form}>
                <AppTextInput
                    label={t("common.emailLabel")}
                    placeholder={t("common.emailPlaceholder")}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={formData.email}
                    onChangeText={(value) => handleFieldChange("email", value)}
                    error={formErrors.email}
                />

                <PasswordInput
                    label={t("common.passwordLabel")}
                    placeholder={t("common.passwordPlaceholder")}
                    value={formData.password}
                    onChangeText={(value) => handleFieldChange("password", value)}
                    error={formErrors.password}
                />

                {authError && (
                    <AppText variant="caption" style={styles.authErrorText}>
                        {authError}
                    </AppText>
                )}

                <AppButton
                    title={t("common.signIn")}
                    onPress={handleSignIn}
                />
            </View>

            <View style={styles.footer}>
                <AppText variant="body" style={styles.footerText}>
                    {t("login.noAccountText")}
                </AppText>

                <Pressable onPress={() => navigation.navigate("Register")}>
                    <AppText variant="body" style={styles.footerLink}>
                        {t("common.createAccount")}
                    </AppText>
                </Pressable>
            </View>
        </ScreenContainer>
    )
}
