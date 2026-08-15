export const errorMessages: Record<string, string> = {
    // Login
    "auth/invalid-credential": "auth.errors.invalidCredential",

    // Register
    "auth/email-already-in-use": "auth.errors.emailAlreadyInUse",

    // Shared
    "auth/network-request-failed": "auth.errors.networkFailed",
    "auth/too-many-requests": "auth.errors.tooManyRequests",
    "auth/user-disabled": "auth.errors.userDisabled",
    "auth/invalid-email": "auth.errors.invalidEmail",
    "auth/weak-password": "auth.errors.weakPassword",
};
