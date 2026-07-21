import { View, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { LoginFormErros, LoginFormData } from "./types";
import {AppText, AppTextInput, AppButton, ScreenContainer, AppLogo} from "@/components"
import { PasswordInput } from "../components/PasswordInput";
import { useAuth } from "@/hooks/useAuth";
import { AppError } from "@/utils/AppError";

export function LoginScreen() {

    const { signIn } = useAuth();

    const [formData, setFormData] = useState<LoginFormData>({email: "", password: ""});
    const [errors, setErrors] = useState<LoginFormErros>({});
    const [authError, setAuthError] = useState<string | null>(null);

    const validateForm = ({email, password}: LoginFormErros) => {
        const errors: LoginFormErros = {}

        if(!email?.trim()) {
            errors.email = "Informe seu e-mail";
        }

        if(!password?.trim()) {
            errors.password = "Informe sua senha";
        }

        return errors;
    }

    const handleSignIn = async () => {
        setAuthError(null);

        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});

        try {
            await signIn(formData.email, formData.password);
        } catch (error) {
            if (error instanceof AppError) {
                setAuthError(error.message);
                return;
            }

            setAuthError("An unexpected error occurred.")
        }
    }

    const handleFieldChange = (field: keyof LoginFormData, value: string) => {
        setFormData((previous) => ({
            ...previous,
            [field]: value,
        }));

        if (errors[field]) {
            setErrors((previous) => ({
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
                    Bem-vindo ao uFinance
                </AppText>

                <AppText variant="body" style={styles.subtitle}>
                    Faça login para continuar gerenciando suas finanças.
                </AppText>
            </View>

            <View style={styles.form}>
                <AppTextInput
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={formData.email}
                    onChangeText={(value) => handleFieldChange("email", value)}
                    error={errors.email}
                />

                <PasswordInput 
                    label="Senha"
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChangeText={(value) => handleFieldChange("password", value)}
                    error={errors.password}
                />

                {authError && (
                    <AppText variant="caption" style={styles.authErrorText}>
                        {authError}
                    </AppText>
                )}

                <AppButton
                    title="Entrar"
                    onPress={handleSignIn}
                />
            </View>

            <View style={styles.footer}>
                <AppText variant="body" style={styles.footerText}>
                    Ainda não possui uma conta?
                </AppText>

                <Pressable>
                    <AppText variant="body" style={styles.footerLink}>
                        Criar conta
                    </AppText>
                </Pressable>
            </View>
        </ScreenContainer>
    )
}