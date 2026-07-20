import { View, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { LoginFormErros, LoginFormData } from "./types";
import {AppText, AppTextInput, AppButton, ScreenContainer, AppLogo} from "@/components"
import { PasswordInput } from "../components/PasswordInput";

export function LoginScreen() {

    const [formData, setFormData] = useState<LoginFormData>({email: "", password: ""});
    const [errors, setErrors] = useState<LoginFormErros>({});

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

    const handleSignIn = () => {
        const validateErrors = validateForm(formData);
        setErrors(validateErrors);
        if(Object.keys(validateErrors).length > 0) return;
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