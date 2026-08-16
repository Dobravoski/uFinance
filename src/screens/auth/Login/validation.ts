import type { TFunction } from "i18next";
import { LoginFormData, LoginFormErrors } from "./types";

export function validateLoginForm(formData: LoginFormData, t: TFunction): LoginFormErrors {
    const errors: LoginFormErrors = {};

    if (!formData.email.trim()) {
        errors.email = t("validation.email.required");
    }

    if (!formData.password.trim()) {
        errors.password = t("validation.password.required");
    }

    return errors;
}
