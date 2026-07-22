import { LoginFormData, LoginFormErros } from "./types";

export function validateLoginForm(formData: LoginFormData): LoginFormErros {
    const errors: LoginFormErros = {};

    if (!formData.email.trim()) {
        errors.email = "Informe seu e-mail";
    }

    if (!formData.password.trim()) {
        errors.password = "Informe sua senha";
    }

    return errors;
}