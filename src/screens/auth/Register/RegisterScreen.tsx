import { View, Pressable } from "react-native";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppLogo, AppText, AppTextInput, ScreenContainer } from "@/components";
import { PasswordInput } from "../components/PasswordInput";
import { RegisterFormData, RegisterFormErrors } from "./types";
import { createStyles } from "./styles";
import { validateRegisterForm } from "./validation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@/navigation/types";
import { useAuth, useThemedStyles } from "@/hooks";
import { AppError } from "@/utils/AppError";

type NavigationProps = NativeStackNavigationProp<AuthStackParamList>;

export function RegisterScreen() {
    const styles = useThemedStyles(createStyles);
    const { t } = useTranslation();
    const { signUp } = useAuth();

    const navigation = useNavigation<NavigationProps>();

    const [formData, setFormData] = useState<RegisterFormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState<RegisterFormErrors>({});
    const [authError, setAuthError] = useState<string | null>(null);

    const handleSignUp = async () => {
        setAuthError(null);
        setFormErrors({});

        const validationErrors = validateRegisterForm(formData, t);

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
            return;
        }

        try {
            await signUp(formData.name, formData.email, formData.password);
        } catch (error) {
            if (error instanceof AppError) {
                setAuthError(error.message);
                return;
            }

            setAuthError(t("common.errors.unexpected"));
        }
    };

    const handleFieldChange = (field: keyof RegisterFormData, value: string) => {
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
                    {t("register.title")}
                </AppText>

                <AppText variant="body" style={styles.subtitle}>
                    {t("register.subtitle")}
                </AppText>
            </View>

            <View style={styles.form}>
                <AppTextInput
                    label={t("common.nameLabel")}
                    placeholder={t("register.namePlaceholder")}
                    value={formData.name}
                    onChangeText={(value) => handleFieldChange("name", value)}
                    error={formErrors.name}
                />

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

                <PasswordInput
                    label={t("register.confirmPasswordLabel")}
                    placeholder={t("register.confirmPasswordPlaceholder")}
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleFieldChange("confirmPassword", value)}
                    error={formErrors.confirmPassword}
                />

                {authError && (
                    <AppText variant="caption" style={styles.authErrorText}>
                        {authError}
                    </AppText>
                )}

                <AppButton
                    title={t("common.createAccount")}
                    onPress={handleSignUp}
                />
            </View>

            <View style={styles.footer}>
                <AppText variant="body" style={styles.footerText}>
                    {t("register.hasAccountText")}
                </AppText>

                <Pressable onPress={() => navigation.navigate("Login")}>
                    <AppText variant="body" style={styles.footerLink}>
                        {t("common.signIn")}
                    </AppText>
                </Pressable>
            </View>
        </ScreenContainer>
    );
}
