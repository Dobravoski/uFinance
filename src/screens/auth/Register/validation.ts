import { RegisterFormData, RegisterFormErrors } from "./types";

const MIN_PASSWORD_LENGTH = 6;

export function validateRegisterForm(formData: RegisterFormData): RegisterFormErrors {
    const errors: RegisterFormErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password.trim();
    const confirmPassword = formData.confirmPassword.trim();

    if (!name) {
        errors.name = "Informe seu nome";
    }

    if (!email) {
        errors.email = "Informe seu e-mail";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "Informe um e-mail válido";
    }

    if (!password) {
        errors.password = "Informe sua senha";
    } else if (password.length < MIN_PASSWORD_LENGTH) {
        errors.password = `A senha deve ter pelo menos ${MIN_PASSWORD_LENGTH} caracteres`;
    }

    if (!confirmPassword) {
        errors.confirmPassword = "Confirme sua senha";
    } else if (password !== confirmPassword) {
        errors.confirmPassword = "As senhas não coincidem";
    }

    return errors;
}