import type { TFunction } from "i18next";
import { LoginFormData, LoginFormErros } from "./types";

export function validateLoginForm(formData: LoginFormData, t: TFunction): LoginFormErros {
    const errors: LoginFormErros = {};

    if (!formData.email.trim()) {
        errors.email = t("validation.email.required");
    }

    if (!formData.password.trim()) {
        errors.password = t("validation.password.required");
    }

    return errors;
}
