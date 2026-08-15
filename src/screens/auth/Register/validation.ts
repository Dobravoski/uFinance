import type { TFunction } from "i18next";
import { RegisterFormData, RegisterFormErrors } from "./types";

const MIN_PASSWORD_LENGTH = 6;

export function validateRegisterForm(formData: RegisterFormData, t: TFunction): RegisterFormErrors {
    const errors: RegisterFormErrors = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password.trim();
    const confirmPassword = formData.confirmPassword.trim();

    if (!name) {
        errors.name = t("validation.name.required");
    }

    if (!email) {
        errors.email = t("validation.email.required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = t("validation.email.invalid");
    }

    if (!password) {
        errors.password = t("validation.password.required");
    } else if (password.length < MIN_PASSWORD_LENGTH) {
        errors.password = t("validation.password.minLength", { min: MIN_PASSWORD_LENGTH });
    }

    if (!confirmPassword) {
        errors.confirmPassword = t("validation.confirmPassword.required");
    } else if (password !== confirmPassword) {
        errors.confirmPassword = t("validation.confirmPassword.mismatch");
    }

    return errors;
}
