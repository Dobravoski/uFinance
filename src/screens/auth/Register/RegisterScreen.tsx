import { View, Pressable } from "react-native";
import { useState } from "react";
import { AppButton, AppLogo, AppText, AppTextInput, ScreenContainer } from "@/components";
import { PasswordInput } from "../components/PasswordInput";
import { RegisterFormData, RegisterFormErrors } from "./types";
import { styles } from "./styles";
import { validateRegisterForm } from "./validation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@/navigation/types";
import { useAuth } from "@/hooks/useAuth";
import { AppError } from "@/utils/AppError";

type NavigationProps = NativeStackNavigationProp<AuthStackParamList>;

export function RegisterScreen() {
    
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

        const validationErrors = validateRegisterForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
            return;
        }

        try {
            await signUp(formData.email, formData.password);
        } catch (error) {
            if (error instanceof AppError) {
                setAuthError(error.message);
                return;
            }

            setAuthError("Ocorreu um erro inesperado.");
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
                    Criar conta
                </AppText>

                <AppText variant="body" style={styles.subtitle}>
                    Crie sua conta para começar a organizar suas finanças.
                </AppText>
            </View>

            <View style={styles.form}>
                <AppTextInput
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={formData.name}
                    onChangeText={(value) => handleFieldChange("name", value)}
                    error={formErrors.name}
                />

                <AppTextInput
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={formData.email}
                    onChangeText={(value) => handleFieldChange("email", value)}
                    error={formErrors.email}
                />

                <PasswordInput
                    label="Senha"
                    placeholder="Digite sua senha"
                    value={formData.password}
                    onChangeText={(value) => handleFieldChange("password", value)}
                    error={formErrors.password}
                />

                <PasswordInput
                    label="Confirmar senha"
                    placeholder="Confirme sua senha"
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
                    title="Criar conta"
                    onPress={handleSignUp}
                />
            </View>

            <View style={styles.footer}>
                <AppText variant="body" style={styles.footerText}>
                    Já possui uma conta?
                </AppText>

                <Pressable onPress={() => navigation.navigate("Login")}>
                    <AppText variant="body" style={styles.footerLink}>
                        Entrar
                    </AppText>
                </Pressable>
            </View>
        </ScreenContainer>
    );
}