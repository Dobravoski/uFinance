import { View, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { LoginFormErros, LoginFormData } from "./types";
import {AppText, AppTextInput, AppButton, ScreenContainer, AppLogo} from "@/components"
import { PasswordInput } from "../components/PasswordInput";
import { useAuth } from "@/hooks/useAuth";
import { AppError } from "@/utils/AppError";
import { validateLoginForm } from "./validation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@/navigation/types";

type NavigationProps = NativeStackNavigationProp<AuthStackParamList>;

export function LoginScreen() {

    const { signIn } = useAuth();
    const navigation = useNavigation<NavigationProps>();

    const [formData, setFormData] = useState<LoginFormData>({email: "", password: ""});
    const [formErrors, setFormErrors] = useState<LoginFormErros>({});
    const [authError, setAuthError] = useState<string | null>(null);

    const handleSignIn = async () => {
        setAuthError(null);

        const validationErrors = validateLoginForm(formData);

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

            setAuthError("An unexpected error occurred.")
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
                    error={formErrors.email}
                />

                <PasswordInput 
                    label="Senha"
                    placeholder="Digite sua senha"
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
                    title="Entrar"
                    onPress={handleSignIn}
                />
            </View>

            <View style={styles.footer}>
                <AppText variant="body" style={styles.footerText}>
                    Ainda não possui uma conta?
                </AppText>

                <Pressable onPress={() => navigation.navigate("Register")}>
                    <AppText variant="body" style={styles.footerLink}>
                        Criar conta
                    </AppText>
                </Pressable>
            </View>
        </ScreenContainer>
    )
}